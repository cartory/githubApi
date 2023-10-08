import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { CommitData } from './commitData';
import { GithubService } from './github.service';

@ApiTags('github')
@Controller('/github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('commits')
  @ApiResponse({ type: [CommitData] })
  async getRepoCommits() {
    return await this.githubService.getRepoCommits();
  }
}
