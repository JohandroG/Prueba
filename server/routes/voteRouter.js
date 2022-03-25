const express = require( 'express' );
const VoteRouter = express.Router();
const {VoteController} = require( './../controllers/votesController' );

//!-----------Routes----------------------------------------------------------------



VoteRouter.route("/create").post(VoteController.publishvote)

VoteRouter.route("/vote1/:_id").get(VoteController.vote1Option)
VoteRouter.route("/vote2/:_id").get(VoteController.vote2Option)
VoteRouter.route("/vote3/:_id").get(VoteController.vote3Option)
VoteRouter.route("/vote4/:_id").get(VoteController.vote4Option)

VoteRouter.route("/getvote/:_id").get(VoteController.getVoteInfo)

VoteRouter.route("/allvotes").get(VoteController.findallVotes)

//!-----------Routes----------------------------------------------------------------

module.exports = { VoteRouter };