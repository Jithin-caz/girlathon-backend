import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { IdeaService } from './idea.service';
import { Response } from 'express';

@Controller('idea')
export class IdeaController {
  constructor(private readonly ideaService: IdeaService) {}
  @Post('submit')
  async submit(@Body() CreateIdea: CreateIdeaDto, @Res() res: Response) {
    const response = await this.ideaService.create(CreateIdea);
    if (response !== null) {
      res.status(201).json({ message: 'success' });
    } else {
      res.status(250).json({ message: 'Error creating' });
    }
  }

  @Get('view/:team')
  async view(@Param('team') team: string, @Res() res: Response) {
    const response = await this.ideaService.view(team);
    if (response !== null) {
      res.status(201).send(response);
    } else {
      res.status(250).json({ message: 'Error view' });
    }
  }

  @Get('mark/:team')
  async mark(@Param('team') team: string, @Res() res: Response) {
    const response = await this.ideaService.updateToggle(team);
    if (response !== null) {
      res.status(201).send(response);
    } else {
      res.status(250).json({ message: 'Error marking' });
    }
  }
}
