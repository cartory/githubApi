import { CommitData } from './commitData';
import * as data from './mocks/data.json';

import { GithubService } from './github.service';
import { GithubController } from './github.controller';

describe('GithubController', () => {
  let githubController: GithubController;
  const githubService = new GithubService();

  beforeEach(async () => {
    githubController = new GithubController(githubService);

    jest.spyOn(githubService, 'getRepoCommits').mockImplementation(async () => {
      return [data.CommitData] as unknown as CommitData[];
    });
  });

  it('GET /github/commits', async () => {
    const commits = await githubController.getRepoCommits();

    expect(commits).toHaveLength(1);
    expect(commits).toBeInstanceOf(Array);
  });
});
