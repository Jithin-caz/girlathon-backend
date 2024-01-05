import { Body, Controller, Post, Res, Session, UseGuards } from "@nestjs/common";
import { TeamService } from './team.service';
import { CreateMemberDto } from './dto/createmember.dto';
import { Response } from 'express';
import { CreateTeamDto } from './dto/createteam.dto';
import { AuthenticatedGuard } from "../auth/guards/Authenticated.guard";

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('member-register')
  async create(@Body() createTeamDto: CreateMemberDto, @Res() res: Response) {
    if (await this.teamService.findOneByEmail(createTeamDto.email)) {
      return res.status(230).json({ message: 'Email already exists' });
    } else if (await this.teamService.findteamcount(createTeamDto.team)) {
      return res
        .status(250)
        .json({ message: 'Team is full Find another team dude' });
    } else {
      await this.teamService.createMember(createTeamDto);
      return res.status(200).json({ message: 'member added successfully' });
    }
  }
  @UseGuards(AuthenticatedGuard)
  @Post('team-assign')
  async assignName(
    @Session() session: Record<string, any>,
    @Res() res: Response,
    @Body() body: any,
  ) {
    console.log(session);
    if (await this.teamService.findTeam(body.team)) {
      return res.status(230).json({ message: 'Team Name already exist' });
    } else {
      await this.teamService.createTeam({
        email: session.passport.user.email,
        name:body.team,
      });
      return res.status(200).json({ message: 'Team created successfully' });
    }
  }
}
