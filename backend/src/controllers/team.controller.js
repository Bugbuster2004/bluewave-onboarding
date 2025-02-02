const settings = require("../../config/settings");
const TeamService = require("../service/team.service");
const { internalServerError } = require("../utils/errors.helper");
const { MAX_ORG_NAME_LENGTH, ORG_NAME_REGEX } = require('../utils/constants.helper');
const db = require("../models");

const Team = db.Team;
const teamService = new TeamService();

const setOrganisation = async (req, res) => {
  let { name } = req.body;
  try {
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ error: 'Organisation name is required and should be a non-empty string' });
    }

    name = name.trim();
    if (name.length > MAX_ORG_NAME_LENGTH) {
      return res.status(400).json({ error: `Organisation name cannot exceed ${MAX_ORG_NAME_LENGTH} characters` });
    }

    if (!ORG_NAME_REGEX.test(name)) {
      return res.status(400).json({ error: 'Organisation name contains invalid characters' });
    }

    const teamCount = await Team.count();
    if (teamCount > 0) {
      return res.status(400).json({ error: 'Cannot create more than one team.' });
    }

    const newOrg = await teamService.createTeam(name);
    return res.status(201).json({
      status: 201,
      message: 'Organisation created successfully',
      data: {
        id: newOrg.id,
        name: newOrg.name,
        createdAt: new Intl.DateTimeFormat('en-US').format(newOrg.createdAt)
      }
    });
  } catch (err) {
    const { statusCode, payload } = internalServerError(
      'CREATE_ORG_ERROR',
      err.message
    );
    console.log(err);
    res.status(statusCode).json(payload);
  }
};

const getTeamCount = async (req, res) => {
  try {
    const result = await teamService.getTeamCount();
    return res.status(200).json(result);
  } catch (err) {
    const { statusCode, payload } = internalServerError(
      "GET_TEAM_COUNT_ERROR",
      err.message,
    );
    res.status(statusCode).json(payload);
  }
};

const getTeamDetails = async (req, res) => {
  try {
    const data = await teamService.getTeam();
    if (!data || !data.team || !data.users) {
      throw new Error("Team data not found");
    }
    const result = {
        name: data.team.name,
        users: data.users.map((user)=> ({
            id: user.id,
            name: user.name,
            email: user.email,
            role: settings.user.roleName[user.role],
            createdAt: new Intl.DateTimeFormat('en-US').format(user.createdAt)
        })),
    }
    return res.status(200).json(result);
  } catch (err) {
    const { statusCode, payload } = internalServerError(
      "GET_TEAM_ERROR",
      err.message,
    );
    res.status(statusCode).json(payload);
  }
};

const updateTeamDetails = async (req, res) => {
    const { name } = req.body;
    try {
      await teamService.updateTeam(name);
      return res.status(200).json({ message: "Team Details Updated Successfully" });
    } catch (err) {
      const { statusCode, payload } = internalServerError(
        "UPDATE_TEAM_ERROR",
        err.message,
      );
      res.status(statusCode).json(payload);
    }
};

const removeMember = async (req, res) => {
  const userId = req.user.id;
  const { memberId } = req.params;
  try {
    await teamService.removeUserFromTeam(userId, memberId);
    return res.status(200).json({ message: "User Removed from Team Successfully" });
  } catch (err) {
    const { statusCode, payload } = internalServerError(
      "REMOVE_USER_ERROR",
      err.message,
    );
    res.status(statusCode).json(payload);
  }
}

const changeRole = async (req, res) => {
  const { memberId, role } = req.body;
  try {
    await teamService.updateUserRole(memberId, role);
    return res.status(200).json({ message: "User Role Updated Successfully" });
  } catch (err) {
    const { statusCode, payload } = internalServerError(
      "CHANGE_ROLE_ERROR",
      err.message,
    );
    res.status(statusCode).json(payload);
  }
}

module.exports = { setOrganisation, getTeamDetails, updateTeamDetails, removeMember, changeRole, getTeamCount };
