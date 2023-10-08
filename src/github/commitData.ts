import { ApiProperty } from '@nestjs/swagger';

export class Tree {
  @ApiProperty()
  sha: string;

  @ApiProperty()
  url: string;
}

export class Verification {
  @ApiProperty()
  verified: boolean;

  @ApiProperty()
  reason: string;

  @ApiProperty()
  signature: any;

  @ApiProperty()
  payload: any;
}

export class Parent {
  @ApiProperty()
  sha: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  html_url: string;
}

export class CommitAuthor {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  date: Date;
}

export class Commit {
  @ApiProperty()
  author: CommitAuthor;

  @ApiProperty()
  committer: CommitAuthor;

  @ApiProperty()
  message: string;

  @ApiProperty()
  tree: Tree;

  @ApiProperty()
  url: string;

  @ApiProperty()
  comment_count: number;

  @ApiProperty()
  verification: Verification;
}

export class CommitDataAuthor {
  @ApiProperty()
  id: number;

  @ApiProperty()
  login: string;

  @ApiProperty()
  node_id: string;

  @ApiProperty()
  avatar_url: string;

  @ApiProperty()
  gravatar_id: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  html_url: string;

  @ApiProperty()
  followers_url: string;

  @ApiProperty()
  following_url: string;

  @ApiProperty()
  gists_url: string;

  @ApiProperty()
  starred_url: string;

  @ApiProperty()
  subscriptions_url: string;

  @ApiProperty()
  organizations_url: string;

  @ApiProperty()
  repos_url: string;

  @ApiProperty()
  events_url: string;

  @ApiProperty()
  received_events_url: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  site_admin: boolean;
}

export class CommitData {
  @ApiProperty()
  sha: string;

  @ApiProperty()
  node_id: string;

  @ApiProperty()
  commit: Commit;

  @ApiProperty()
  url: string;

  @ApiProperty()
  html_url: string;

  @ApiProperty()
  comments_url: string;

  @ApiProperty()
  author: CommitDataAuthor;

  @ApiProperty()
  committer: CommitDataAuthor;

  @ApiProperty({ type: [Parent] })
  parents: Parent[];
}
