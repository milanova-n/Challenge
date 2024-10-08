// Create repositories array to test the functionality and not to reach the request limit
export const repositories = [
  {
    id: 1,
    node_id: "R_1",
    name: "Project Alpha",
    full_name: "user/project-alpha",
    private: false,
    owner: {
      login: "user",
      id: 123,
      node_id: "U_123",
      avatar_url: "https://avatar.url/123",
      gravatar_id: "",
      url: "https://api.github.com/users/user",
      html_url: "https://github.com/user",
      followers_url: "https://api.github.com/users/user/followers",
      following_url: "https://api.github.com/users/user/following{/other_user}",
      gists_url: "https://api.github.com/users/user/gists{/gist_id}",
      starred_url: "https://api.github.com/users/user/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/user/subscriptions",
      organizations_url: "https://api.github.com/users/user/orgs",
      repos_url: "https://api.github.com/users/user/repos",
      events_url: "https://api.github.com/users/user/events{/privacy}",
      received_events_url: "https://api.github.com/users/user/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/user/project-alpha",
    description: "A sample project for demonstration.",
    fork: false,
    url: "https://api.github.com/repos/user/project-alpha",
    forks_url: "https://api.github.com/repos/user/project-alpha/forks",
    keys_url: "https://api.github.com/repos/user/project-alpha/keys{/key_id}",
    collaborators_url: "https://api.github.com/repos/user/project-alpha/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/user/project-alpha/teams",
    hooks_url: "https://api.github.com/repos/user/project-alpha/hooks",
    issue_events_url: "https://api.github.com/repos/user/project-alpha/issues/events{/number}",
    events_url: "https://api.github.com/repos/user/project-alpha/events",
    assignees_url: "https://api.github.com/repos/user/project-alpha/assignees{/user}",
    branches_url: "https://api.github.com/repos/user/project-alpha/branches{/branch}",
    tags_url: "https://api.github.com/repos/user/project-alpha/tags",
    blobs_url: "https://api.github.com/repos/user/project-alpha/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/user/project-alpha/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/user/project-alpha/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/user/project-alpha/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/user/project-alpha/statuses/{sha}",
    languages_url: "https://api.github.com/repos/user/project-alpha/languages",
    stargazers_url: "https://api.github.com/repos/user/project-alpha/stargazers",
    contributors_url: "https://api.github.com/repos/user/project-alpha/contributors",
    subscribers_url: "https://api.github.com/repos/user/project-alpha/subscribers",
    subscription_url: "https://api.github.com/repos/user/project-alpha/subscription",
    commits_url: "https://api.github.com/repos/user/project-alpha/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/user/project-alpha/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/user/project-alpha/comments{/number}",
    issue_comment_url: "https://api.github.com/repos/user/project-alpha/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/user/project-alpha/contents/{+path}",
    compare_url: "https://api.github.com/repos/user/project-alpha/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/user/project-alpha/merges",
    archive_url: "https://api.github.com/repos/user/project-alpha/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/user/project-alpha/downloads",
    issues_url: "https://api.github.com/repos/user/project-alpha/issues{/number}",
    pulls_url: "https://api.github.com/repos/user/project-alpha/pulls{/number}",
    milestones_url: "https://api.github.com/repos/user/project-alpha/milestones{/number}",
    notifications_url: "https://api.github.com/repos/user/project-alpha/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/user/project-alpha/labels{/name}",
    releases_url: "https://api.github.com/repos/user/project-alpha/releases{/id}",
    deployments_url: "https://api.github.com/repos/user/project-alpha/deployments",
    created_at: "2024-09-25T00:00:00Z",
    updated_at: "2024-09-25T00:00:00Z",
    pushed_at: "2024-09-25T00:00:00Z",
    git_url: "git://github.com/user/project-alpha.git",
    ssh_url: "git@github.com:user/project-alpha.git",
    clone_url: "https://github.com/user/project-alpha.git",
    svn_url: "https://github.com/user/project-alpha",
    homepage: null,
    size: 100,
    stargazers_count: 10,
    watchers_count: 10,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["javascript", "example"],
    visibility: "public",
    forks: 2,
    open_issues: 1,
    watchers: 10,
    default_branch: "main",
  },
  {
    id: 2,
    node_id: "R_2",
    name: "Project Beta",
    full_name: "user/project-beta",
    private: false,
    owner: {
      login: "user",
      id: 123,
      node_id: "U_123",
      avatar_url: "https://avatar.url/123",
      gravatar_id: "",
      url: "https://api.github.com/users/user",
      html_url: "https://github.com/user",
      followers_url: "https://api.github.com/users/user/followers",
      following_url: "https://api.github.com/users/user/following{/other_user}",
      gists_url: "https://api.github.com/users/user/gists{/gist_id}",
      starred_url: "https://api.github.com/users/user/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/user/subscriptions",
      organizations_url: "https://api.github.com/users/user/orgs",
      repos_url: "https://api.github.com/users/user/repos",
      events_url: "https://api.github.com/users/user/events{/privacy}",
      received_events_url: "https://api.github.com/users/user/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/user/project-beta",
    description: "Another sample project to learn.Another sample project to learn.Another sample project to learn.Another sample project to learn.Another sample project to learn.Another sample project to learn.",
    fork: false,
    url: "https://api.github.com/repos/user/project-beta",
    forks_url: "https://api.github.com/repos/user/project-beta/forks",
    keys_url: "https://api.github.com/repos/user/project-beta/keys{/key_id}",
    collaborators_url: "https://api.github.com/repos/user/project-beta/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/user/project-beta/teams",
    hooks_url: "https://api.github.com/repos/user/project-beta/hooks",
    issue_events_url: "https://api.github.com/repos/user/project-beta/issues/events{/number}",
    events_url: "https://api.github.com/repos/user/project-beta/events",
    assignees_url: "https://api.github.com/repos/user/project-beta/assignees{/user}",
    branches_url: "https://api.github.com/repos/user/project-beta/branches{/branch}",
    tags_url: "https://api.github.com/repos/user/project-beta/tags",
    blobs_url: "https://api.github.com/repos/user/project-beta/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/user/project-beta/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/user/project-beta/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/user/project-beta/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/user/project-beta/statuses/{sha}",
    languages_url: "https://api.github.com/repos/user/project-beta/languages",
    stargazers_url: "https://api.github.com/repos/user/project-beta/stargazers",
    contributors_url: "https://api.github.com/repos/user/project-beta/contributors",
    subscribers_url: "https://api.github.com/repos/user/project-beta/subscribers",
    subscription_url: "https://api.github.com/repos/user/project-beta/subscription",
    commits_url: "https://api.github.com/repos/user/project-beta/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/user/project-beta/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/user/project-beta/comments{/number}",
    issue_comment_url: "https://api.github.com/repos/user/project-beta/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/user/project-beta/contents/{+path}",
    compare_url: "https://api.github.com/repos/user/project-beta/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/user/project-beta/merges",
    archive_url: "https://api.github.com/repos/user/project-beta/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/user/project-beta/downloads",
    issues_url: "https://api.github.com/repos/user/project-beta/issues{/number}",
    pulls_url: "https://api.github.com/repos/user/project-beta/pulls{/number}",
    milestones_url: "https://api.github.com/repos/user/project-beta/milestones{/number}",
    notifications_url: "https://api.github.com/repos/user/project-beta/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/user/project-beta/labels{/name}",
    releases_url: "https://api.github.com/repos/user/project-beta/releases{/id}",
    deployments_url: "https://api.github.com/repos/user/project-beta/deployments",
    created_at: "2024-09-25T00:00:00Z",
    updated_at: "2024-09-25T00:00:00Z",
    pushed_at: "2024-09-25T00:00:00Z",
    git_url: "git://github.com/user/project-beta.git",
    ssh_url: "git@github.com:user/project-beta.git",
    clone_url: "https://github.com/user/project-beta.git",
    svn_url: "https://github.com/user/project-beta",
    homepage: null,
    size: 150,
    stargazers_count: 20,
    watchers_count: 20,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 5,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["python", "learning"],
    visibility: "public",
    forks: 5,
    open_issues: 2,
    watchers: 20,
    default_branch: "main",
  },
  {
    id: 3,
    node_id: "R_3",
    name: "Project Gamma",
    full_name: "user/project-gamma",
    private: false,
    owner: {
      login: "user",
      id: 123,
      node_id: "U_123",
      avatar_url: "https://avatar.url/123",
      gravatar_id: "",
      url: "https://api.github.com/users/user",
      html_url: "https://github.com/user",
      followers_url: "https://api.github.com/users/user/followers",
      following_url: "https://api.github.com/users/user/following{/other_user}",
      gists_url: "https://api.github.com/users/user/gists{/gist_id}",
      starred_url: "https://api.github.com/users/user/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/user/subscriptions",
      organizations_url: "https://api.github.com/users/user/orgs",
      repos_url: "https://api.github.com/users/user/repos",
      events_url: "https://api.github.com/users/user/events{/privacy}",
      received_events_url: "https://api.github.com/users/user/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/user/project-gamma",
    description: "A project focusing on web development.",
    fork: false,
    url: "https://api.github.com/repos/user/project-gamma",
    forks_url: "https://api.github.com/repos/user/project-gamma/forks",
    keys_url: "https://api.github.com/repos/user/project-gamma/keys{/key_id}",
    collaborators_url: "https://api.github.com/repos/user/project-gamma/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/user/project-gamma/teams",
    hooks_url: "https://api.github.com/repos/user/project-gamma/hooks",
    issue_events_url: "https://api.github.com/repos/user/project-gamma/issues/events{/number}",
    events_url: "https://api.github.com/repos/user/project-gamma/events",
    assignees_url: "https://api.github.com/repos/user/project-gamma/assignees{/user}",
    branches_url: "https://api.github.com/repos/user/project-gamma/branches{/branch}",
    tags_url: "https://api.github.com/repos/user/project-gamma/tags",
    blobs_url: "https://api.github.com/repos/user/project-gamma/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/user/project-gamma/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/user/project-gamma/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/user/project-gamma/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/user/project-gamma/statuses/{sha}",
    languages_url: "https://api.github.com/repos/user/project-gamma/languages",
    stargazers_url: "https://api.github.com/repos/user/project-gamma/stargazers",
    contributors_url: "https://api.github.com/repos/user/project-gamma/contributors",
    subscribers_url: "https://api.github.com/repos/user/project-gamma/subscribers",
    subscription_url: "https://api.github.com/repos/user/project-gamma/subscription",
    commits_url: "https://api.github.com/repos/user/project-gamma/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/user/project-gamma/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/user/project-gamma/comments{/number}",
    issue_comment_url: "https://api.github.com/repos/user/project-gamma/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/user/project-gamma/contents/{+path}",
    compare_url: "https://api.github.com/repos/user/project-gamma/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/user/project-gamma/merges",
    archive_url: "https://api.github.com/repos/user/project-gamma/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/user/project-gamma/downloads",
    issues_url: "https://api.github.com/repos/user/project-gamma/issues{/number}",
    pulls_url: "https://api.github.com/repos/user/project-gamma/pulls{/number}",
    milestones_url: "https://api.github.com/repos/user/project-gamma/milestones{/number}",
    notifications_url: "https://api.github.com/repos/user/project-gamma/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/user/project-gamma/labels{/name}",
    releases_url: "https://api.github.com/repos/user/project-gamma/releases{/id}",
    deployments_url: "https://api.github.com/repos/user/project-gamma/deployments",
    created_at: "2024-09-25T00:00:00Z",
    updated_at: "2024-09-25T00:00:00Z",
    pushed_at: "2024-09-25T00:00:00Z",
    git_url: "git://github.com/user/project-gamma.git",
    ssh_url: "git@github.com:user/project-gamma.git",
    clone_url: "https://github.com/user/project-gamma.git",
    svn_url: "https://github.com/user/project-gamma",
    homepage: null,
    size: 200,
    stargazers_count: 30,
    watchers_count: 30,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 8,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["html", "css", "web-development"],
    visibility: "public",
    forks: 8,
    open_issues: 0,
    watchers: 30,
    default_branch: "main",
  },
  {
    id: 4,
    node_id: "R_4",
    name: "Project Delta",
    full_name: "user/project-delta",
    private: false,
    owner: {
      login: "user",
      id: 123,
      node_id: "U_123",
      avatar_url: "https://avatar.url/123",
      gravatar_id: "",
      url: "https://api.github.com/users/user",
      html_url: "https://github.com/user",
      followers_url: "https://api.github.com/users/user/followers",
      following_url: "https://api.github.com/users/user/following{/other_user}",
      gists_url: "https://api.github.com/users/user/gists{/gist_id}",
      starred_url: "https://api.github.com/users/user/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/user/subscriptions",
      organizations_url: "https://api.github.com/users/user/orgs",
      repos_url: "https://api.github.com/users/user/repos",
      events_url: "https://api.github.com/users/user/events{/privacy}",
      received_events_url: "https://api.github.com/users/user/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/user/project-delta",
    description: "Exploring data analysis with Python.",
    fork: false,
    url: "https://api.github.com/repos/user/project-delta",
    forks_url: "https://api.github.com/repos/user/project-delta/forks",
    keys_url: "https://api.github.com/repos/user/project-delta/keys{/key_id}",
    collaborators_url: "https://api.github.com/repos/user/project-delta/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/user/project-delta/teams",
    hooks_url: "https://api.github.com/repos/user/project-delta/hooks",
    issue_events_url: "https://api.github.com/repos/user/project-delta/issues/events{/number}",
    events_url: "https://api.github.com/repos/user/project-delta/events",
    assignees_url: "https://api.github.com/repos/user/project-delta/assignees{/user}",
    branches_url: "https://api.github.com/repos/user/project-delta/branches{/branch}",
    tags_url: "https://api.github.com/repos/user/project-delta/tags",
    blobs_url: "https://api.github.com/repos/user/project-delta/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/user/project-delta/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/user/project-delta/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/user/project-delta/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/user/project-delta/statuses/{sha}",
    languages_url: "https://api.github.com/repos/user/project-delta/languages",
    stargazers_url: "https://api.github.com/repos/user/project-delta/stargazers",
    contributors_url: "https://api.github.com/repos/user/project-delta/contributors",
    subscribers_url: "https://api.github.com/repos/user/project-delta/subscribers",
    subscription_url: "https://api.github.com/repos/user/project-delta/subscription",
    commits_url: "https://api.github.com/repos/user/project-delta/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/user/project-delta/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/user/project-delta/comments{/number}",
    issue_comment_url: "https://api.github.com/repos/user/project-delta/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/user/project-delta/contents/{+path}",
    compare_url: "https://api.github.com/repos/user/project-delta/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/user/project-delta/merges",
    archive_url: "https://api.github.com/repos/user/project-delta/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/user/project-delta/downloads",
    issues_url: "https://api.github.com/repos/user/project-delta/issues{/number}",
    pulls_url: "https://api.github.com/repos/user/project-delta/pulls{/number}",
    milestones_url: "https://api.github.com/repos/user/project-delta/milestones{/number}",
    notifications_url: "https://api.github.com/repos/user/project-delta/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/user/project-delta/labels{/name}",
    releases_url: "https://api.github.com/repos/user/project-delta/releases{/id}",
    deployments_url: "https://api.github.com/repos/user/project-delta/deployments",
    created_at: "2024-09-25T00:00:00Z",
    updated_at: "2024-09-25T00:00:00Z",
    pushed_at: "2024-09-25T00:00:00Z",
    git_url: "git://github.com/user/project-delta.git",
    ssh_url: "git@github.com:user/project-delta.git",
    clone_url: "https://github.com/user/project-delta.git",
    svn_url: "https://github.com/user/project-delta",
    homepage: null,
    size: 250,
    stargazers_count: 15,
    watchers_count: 15,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 6,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 3,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["data-analysis", "javascript", "python"],
    visibility: "public",
    forks: 6,
    open_issues: 3,
    watchers: 15,
    default_branch: "main",
  }
];