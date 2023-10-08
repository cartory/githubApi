import { Octokit } from 'octokit';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { CommitData } from './commitData';

@Injectable()
export class GithubService {
  private octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
  }

  async getRepoCommits() {
    const { status, data } = await this.octokit.rest.repos.listCommits({
      repo: process.env.GITHUB_REPO_NAME,
      owner: process.env.GITHUB_REPO_OWNER,
    });

    if (status !== HttpStatus.OK) {
      throw new HttpException('error on get RepoCommits', status);
    }

    return data as unknown as CommitData[];
  }
}
