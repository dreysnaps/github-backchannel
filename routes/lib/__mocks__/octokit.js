const listMembersResult = {
  status: 200,
  url: "https://api.github.com/orgs/github/members",
  headers: {
    "access-control-allow-origin": "*",
    "access-control-expose-headers":
      "ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, Deprecation, Sunset",
    "cache-control": "private, max-age=60, s-maxage=60",
    connection: "close",
    "content-encoding": "gzip",
    "content-security-policy": "default-src 'none'",
    "content-type": "application/json; charset=utf-8",
    date: "Sun, 08 Mar 2020 09:09:02 GMT",
    etag: 'W/"2918fc768adee42b4d345838d0e26238"',
    link:
      '<https://api.github.com/organizations/9919/members?page=2>; rel="next", <https://api.github.com/organizations/9919/members?page=8>; rel="last"',
    "referrer-policy":
      "origin-when-cross-origin, strict-origin-when-cross-origin",
    server: "GitHub.com",
    status: "200 OK",
    "strict-transport-security": "max-age=31536000; includeSubdomains; preload",
    "transfer-encoding": "chunked",
    vary:
      "Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding, Accept, X-Requested-With",
    "x-accepted-oauth-scopes": "",
    "x-content-type-options": "nosniff",
    "x-frame-options": "deny",
    "x-github-media-type": "github.v3; format=json",
    "x-github-request-id": "B148:334D:36E652:43BDC4:5E64B62D",
    "x-oauth-scopes": "",
    "x-ratelimit-limit": "5000",
    "x-ratelimit-remaining": "4774",
    "x-ratelimit-reset": "1583661317",
    "x-xss-protection": "1; mode=block"
  },
  data: [
    {
      login: "abhishekhegde",
      id: 11968290,
      node_id: "MDQ6VXNlcjExOTY4Mjkw",
      avatar_url: "https://avatars3.githubusercontent.com/u/11968290?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/abhishekhegde",
      html_url: "https://github.com/abhishekhegde",
      followers_url: "https://api.github.com/users/abhishekhegde/followers",
      following_url:
        "https://api.github.com/users/abhishekhegde/following{/other_user}",
      gists_url: "https://api.github.com/users/abhishekhegde/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/abhishekhegde/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/abhishekhegde/subscriptions",
      organizations_url: "https://api.github.com/users/abhishekhegde/orgs",
      repos_url: "https://api.github.com/users/abhishekhegde/repos",
      events_url: "https://api.github.com/users/abhishekhegde/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/abhishekhegde/received_events",
      type: "User",
      site_admin: true
    },
    {
      login: "abinoda",
      id: 50083,
      node_id: "MDQ6VXNlcjUwMDgz",
      avatar_url: "https://avatars0.githubusercontent.com/u/50083?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/abinoda",
      html_url: "https://github.com/abinoda",
      followers_url: "https://api.github.com/users/abinoda/followers",
      following_url:
        "https://api.github.com/users/abinoda/following{/other_user}",
      gists_url: "https://api.github.com/users/abinoda/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/abinoda/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/abinoda/subscriptions",
      organizations_url: "https://api.github.com/users/abinoda/orgs",
      repos_url: "https://api.github.com/users/abinoda/repos",
      events_url: "https://api.github.com/users/abinoda/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/abinoda/received_events",
      type: "User",
      site_admin: true
    }
  ]
};

const getByUsername = {
  abhishekhegde: {
    status: 200,
    url: "https://api.github.com/users/abhishekhegde",
    headers: {
      "access-control-allow-origin": "*",
      "access-control-expose-headers":
        "ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, Deprecation, Sunset",
      "cache-control": "private, max-age=60, s-maxage=60",
      connection: "close",
      "content-encoding": "gzip",
      "content-security-policy": "default-src 'none'",
      "content-type": "application/json; charset=utf-8",
      date: "Sun, 08 Mar 2020 09:09:03 GMT",
      etag: 'W/"03477463158788d1be8ee84c376eed5a"',
      "last-modified": "Wed, 04 Mar 2020 13:37:44 GMT",
      "referrer-policy":
        "origin-when-cross-origin, strict-origin-when-cross-origin",
      server: "GitHub.com",
      status: "200 OK",
      "strict-transport-security":
        "max-age=31536000; includeSubdomains; preload",
      "transfer-encoding": "chunked",
      vary:
        "Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding, Accept, X-Requested-With",
      "x-accepted-oauth-scopes": "",
      "x-content-type-options": "nosniff",
      "x-frame-options": "deny",
      "x-github-media-type": "github.v3; format=json",
      "x-github-request-id": "B14E:334D:36E66D:43BDE2:5E64B62F",
      "x-oauth-scopes": "",
      "x-ratelimit-limit": "5000",
      "x-ratelimit-remaining": "4773",
      "x-ratelimit-reset": "1583661317",
      "x-xss-protection": "1; mode=block"
    },
    data: {
      login: "abhishekhegde",
      id: 11968290,
      node_id: "MDQ6VXNlcjExOTY4Mjkw",
      avatar_url: "https://avatars3.githubusercontent.com/u/11968290?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/abhishekhegde",
      html_url: "https://github.com/abhishekhegde",
      followers_url: "https://api.github.com/users/abhishekhegde/followers",
      following_url:
        "https://api.github.com/users/abhishekhegde/following{/other_user}",
      gists_url: "https://api.github.com/users/abhishekhegde/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/abhishekhegde/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/abhishekhegde/subscriptions",
      organizations_url: "https://api.github.com/users/abhishekhegde/orgs",
      repos_url: "https://api.github.com/users/abhishekhegde/repos",
      events_url: "https://api.github.com/users/abhishekhegde/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/abhishekhegde/received_events",
      type: "User",
      site_admin: true,
      name: "Abhishek Hegde",
      company: "@Microsoft @github ",
      blog: "",
      location: null,
      email: "abhishekhegde@github.com",
      hireable: null,
      bio: "Designing interactions for code to cloud experience ",
      public_repos: 4,
      public_gists: 0,
      followers: 13,
      following: 0,
      created_at: "2015-04-15T20:54:34Z",
      updated_at: "2020-03-04T13:37:44Z"
    }
  },
  abinoda: {
    status: 200,
    url: "https://api.github.com/users/abinoda",
    headers: {
      "access-control-allow-origin": "*",
      "access-control-expose-headers":
        "ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, Deprecation, Sunset",
      "cache-control": "private, max-age=60, s-maxage=60",
      connection: "close",
      "content-encoding": "gzip",
      "content-security-policy": "default-src 'none'",
      "content-type": "application/json; charset=utf-8",
      date: "Sun, 08 Mar 2020 09:09:03 GMT",
      etag: 'W/"c0c85ed1fccc20d47c0a97102f61e4a7"',
      "last-modified": "Wed, 26 Feb 2020 21:26:08 GMT",
      "referrer-policy":
        "origin-when-cross-origin, strict-origin-when-cross-origin",
      server: "GitHub.com",
      status: "200 OK",
      "strict-transport-security":
        "max-age=31536000; includeSubdomains; preload",
      "transfer-encoding": "chunked",
      vary:
        "Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding, Accept, X-Requested-With",
      "x-accepted-oauth-scopes": "",
      "x-content-type-options": "nosniff",
      "x-frame-options": "deny",
      "x-github-media-type": "github.v3; format=json",
      "x-github-request-id": "B150:334D:36E66D:43BDE3:5E64B62F",
      "x-oauth-scopes": "",
      "x-ratelimit-limit": "5000",
      "x-ratelimit-remaining": "4772",
      "x-ratelimit-reset": "1583661317",
      "x-xss-protection": "1; mode=block"
    },
    data: {
      login: "abinoda",
      id: 50083,
      node_id: "MDQ6VXNlcjUwMDgz",
      avatar_url: "https://avatars0.githubusercontent.com/u/50083?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/abinoda",
      html_url: "https://github.com/abinoda",
      followers_url: "https://api.github.com/users/abinoda/followers",
      following_url:
        "https://api.github.com/users/abinoda/following{/other_user}",
      gists_url: "https://api.github.com/users/abinoda/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/abinoda/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/abinoda/subscriptions",
      organizations_url: "https://api.github.com/users/abinoda/orgs",
      repos_url: "https://api.github.com/users/abinoda/repos",
      events_url: "https://api.github.com/users/abinoda/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/abinoda/received_events",
      type: "User",
      site_admin: true,
      name: "Abi Noda",
      company: null,
      blog: "http://twitter.com/abi",
      location: null,
      email: "a@abinoda.com",
      hireable: null,
      bio: "Building @PullReminders",
      public_repos: 8,
      public_gists: 4,
      followers: 395,
      following: 1,
      created_at: "2009-01-29T00:16:16Z",
      updated_at: "2020-02-26T21:26:08Z"
    }
  }
};

const getResult = {
  github: {
    status: 200,
    url: "https://api.github.com/orgs/github",
    headers: {
      "access-control-allow-origin": "*",
      "access-control-expose-headers":
        "ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, Deprecation, Sunset",
      "cache-control": "private, max-age=60, s-maxage=60",
      connection: "close",
      "content-encoding": "gzip",
      "content-security-policy": "default-src 'none'",
      "content-type": "application/json; charset=utf-8",
      date: "Sun, 08 Mar 2020 09:17:10 GMT",
      etag: 'W/"04f326f5e5bb1668d0f773b5ec9f5a1c"',
      "last-modified": "Fri, 07 Feb 2020 13:08:07 GMT",
      "referrer-policy":
        "origin-when-cross-origin, strict-origin-when-cross-origin",
      server: "GitHub.com",
      status: "200 OK",
      "strict-transport-security":
        "max-age=31536000; includeSubdomains; preload",
      "transfer-encoding": "chunked",
      vary:
        "Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding, Accept, X-Requested-With",
      "x-accepted-oauth-scopes": "admin:org, read:org, repo, user, write:org",
      "x-content-type-options": "nosniff",
      "x-frame-options": "deny",
      "x-github-media-type": "github.v3; format=json",
      "x-github-request-id": "B15B:613F:1122A15:164FC26:5E64B815",
      "x-oauth-scopes": "",
      "x-ratelimit-limit": "5000",
      "x-ratelimit-remaining": "4742",
      "x-ratelimit-reset": "1583661317",
      "x-xss-protection": "1; mode=block"
    },
    data: {
      login: "github",
      id: 9919,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjk5MTk=",
      url: "https://api.github.com/orgs/github",
      repos_url: "https://api.github.com/orgs/github/repos",
      events_url: "https://api.github.com/orgs/github/events",
      hooks_url: "https://api.github.com/orgs/github/hooks",
      issues_url: "https://api.github.com/orgs/github/issues",
      members_url: "https://api.github.com/orgs/github/members{/member}",
      public_members_url:
        "https://api.github.com/orgs/github/public_members{/member}",
      avatar_url: "https://avatars1.githubusercontent.com/u/9919?v=4",
      description: "How people build software.",
      name: "GitHub",
      company: null,
      blog: "https://github.com/about",
      location: "San Francisco, CA",
      email: "support@github.com",
      is_verified: true,
      has_organization_projects: true,
      has_repository_projects: true,
      public_repos: 337,
      public_gists: 0,
      followers: 0,
      following: 0,
      html_url: "https://github.com/github",
      created_at: "2008-05-11T04:37:31Z",
      updated_at: "2020-02-07T13:08:07Z",
      type: "Organization"
    }
  }
};

exports.octokit = {
  orgs: {
    listMembers: () => {
      return listMembersResult;
    },
    get: param => {
      if (getResult[params.org]) {
        return getResult[params.org];
      }
      throw new Error();
    }
  },
  users: {
    getByUsername: params => {
      return getByUsername[params.username];
    }
  }
};
