var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }),
      {
        onShellReady: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-T3F4LBBN.css";

// app/root.tsx
var import_jsx_runtime = require("react/jsx-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }], meta = () => ({
  charset: "utf-8",
  title: "Personal token protocol",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Outlet, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.LiveReload, {})
        ]
      })
    ]
  });
}

// app/routes/connect-wallet.tsx
var connect_wallet_exports = {};
__export(connect_wallet_exports, {
  default: () => ConnectWallet
});
var import_jsx_runtime = require("react/jsx-runtime");
function ConnectWallet() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "pt-10 grid place-items-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: "text-2xl font-semibold ",
        children: "Connect wallet"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            type: "button",
            className: "text-white bg-first hover:bg-second font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ",
            children: "Connect wallet"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                  children: "View only permission. We will never do anything withot your approval"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                  children: "Trusted by 0 persons"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                  children: "Lens protocol"
                })
              ]
            })
          })
        ]
      })
    ]
  });
}

// app/routes/connected.tsx
var connected_exports = {};
__export(connected_exports, {
  default: () => Connected
});
var import_jsx_runtime = require("react/jsx-runtime");
function Connected() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "p-10",
    children: "Only if you are connected can see this page"
  });
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard
});
var import_react3 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime");
function Dashboard() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Outlet, {});
}

// app/routes/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => Dashboard2,
  loader: () => loader
});
var import_react5 = require("@remix-run/react");

// app/components/NavbarLogged.tsx
var import_react4 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime");
function NavbarLogged({ address }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
    className: "bg-bg border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "container flex flex-wrap justify-between items-center mx-auto",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react4.Link, {
          to: "/login",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden md:block"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex md:order-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
              type: "button",
              className: "text-white bg-first hover:bg-second font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3",
              children: [
                address.slice(0, 6),
                "...",
                address.slice(-4)
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react4.Link, {
              to: "/login",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                type: "button",
                className: "text-white bg-third hover:bg-first font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 hidden sm:block",
                children: "Logout"
              })
            })
          ]
        })
      ]
    })
  });
}

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
db = new import_client.PrismaClient(), db.$connect();

// app/routes/dashboard/index.tsx
var import_graphql_request2 = require("graphql-request");

// app/blockchain/lens-api.ts
var import_graphql_request = require("graphql-request"), GetPing = import_graphql_request.gql`
  query Query {
    ping
  }
`, ExplorePublications = import_graphql_request.gql`
  query ExplorePublications {
    explorePublications(
      request: {
        sortCriteria: TOP_COMMENTED
        publicationTypes: [POST, COMMENT, MIRROR]
        limit: 10
      }
    ) {
      items {
        __typename
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }

  fragment MediaFields on Media {
    url
    width
    height
    mimeType
  }

  fragment ProfileFields on Profile {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
    isFollowedByMe
    isFollowing(who: null)
    followNftAddress
    metadata
    isDefault
    handle
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
        small {
          ...MediaFields
        }
        medium {
          ...MediaFields
        }
      }
    }
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
        small {
          ...MediaFields
        }
        medium {
          ...MediaFields
        }
      }
    }
    ownedBy
    dispatcher {
      address
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            name
            symbol
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
        type
      }
      ... on RevertFollowModuleSettings {
        type
      }
    }
  }

  fragment PublicationStatsFields on PublicationStats {
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
  }

  fragment MetadataOutputFields on MetadataOutput {
    name
    description
    content
    media {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
    attributes {
      displayType
      traitType
      value
    }
  }

  fragment Erc20Fields on Erc20 {
    name
    symbol
    decimals
    address
  }

  fragment CollectModuleFields on CollectModule {
    __typename
    ... on FreeCollectModuleSettings {
      type
    }
    ... on FeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedTimedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
    ... on RevertCollectModuleSettings {
      type
    }
    ... on TimedFeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
  }

  fragment PostFields on Post {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
    hidden
    reaction(request: null)
    mirrors(by: null)
    hasCollectedByMe
  }

  fragment MirrorBaseFields on Mirror {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
    hidden
    reaction(request: null)
    hasCollectedByMe
  }

  fragment MirrorFields on Mirror {
    ...MirrorBaseFields
    mirrorOf {
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
    }
  }

  fragment CommentBaseFields on Comment {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
    hidden
    reaction(request: null)
    mirrors(by: null)
    hasCollectedByMe
  }

  fragment CommentFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
        ...MirrorBaseFields
        mirrorOf {
          ... on Post {
            ...PostFields
          }
          ... on Comment {
            ...CommentMirrorOfFields
          }
        }
      }
    }
  }

  fragment CommentMirrorOfFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
        ...MirrorBaseFields
      }
    }
  }
`;

// app/utils/hour.ts
function calculateHoursBetweenNowAndDate(date) {
  let now = new Date(), dateToCompare = new Date(date), diff = Math.abs(now.getTime() - dateToCompare.getTime());
  return Math.ceil(diff / (1e3 * 60 * 60));
}

// app/utils/ipfs.ts
var removeIpfsPrefix = (str) => str.replace("ipfs://", ""), addIpfsPrefix = (str) => `https://lens.infura-ipfs.io/ipfs/${str}`, transformToIpfsUrl = (str) => {
  if (str.startsWith("ipfs://")) {
    let ipfsHash = removeIpfsPrefix(str);
    return addIpfsPrefix(ipfsHash);
  }
  return str;
};

// app/utils/text.ts
function resume(content) {
  return (content == null ? void 0 : content.length) > 100 ? `${content.slice(0, 100)} ...` : content;
}

// app/components/Social/Post.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Post({
  name,
  handle,
  profileImage,
  content,
  image,
  collection,
  comments,
  mirrors,
  createdAt
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "rounded-lg p-4 m-4 border-black border-2 flex flex-col justify-between",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex",
                children: [
                  profileImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                    className: "w-10 h-10 rounded-full",
                    src: transformToIpfsUrl(profileImage),
                    alt: "avatar"
                  }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "w-10 h-10 bg-first rounded-full ",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-center mt-1.5 text-white",
                        children: name.charAt(0)
                      }),
                      " "
                    ]
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "content-start",
                    children: [
                      name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-black text-xs font-bold px-3",
                        children: name
                      }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-black text-xs font-bold px-3",
                        children: handle
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                        className: "text-gray-500 text-xs px-3",
                        children: [
                          "@",
                          handle
                        ]
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "text-gray-500 text-xs ",
                children: [
                  calculateHoursBetweenNowAndDate(createdAt),
                  " h"
                ]
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "pt-5",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-black text-sm text-justify whitespace-pre-line",
              children: resume(content)
            })
          }),
          image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "pt-3 ",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
              src: transformToIpfsUrl(image),
              alt: "post"
            })
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "divide-y bottom-0 pt-5",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex ",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "text-gray-600 text-tiny m-auto ",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className: "font-bold",
                    children: [
                      collection,
                      " "
                    ]
                  }),
                  " Collect"
                ]
              }),
              "\xA0 \xA0",
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "text-gray-600 text-tiny m-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className: "font-bold",
                    children: [
                      comments,
                      " "
                    ]
                  }),
                  " Comments"
                ]
              }),
              "\xA0 \xA0",
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "text-gray-600 text-tiny m-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className: "font-bold",
                    children: [
                      mirrors,
                      " "
                    ]
                  }),
                  "Mirrors"
                ]
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})
        ]
      })
    ]
  });
}

// app/routes/dashboard/index.tsx
var import_jsx_runtime = require("react/jsx-runtime"), loader = async () => {
  console.log("[BFF][dashboard]");
  let user = await db.user.findMany(), items = (await new import_graphql_request2.GraphQLClient("https://api.lens.dev/playground").request(ExplorePublications)).explorePublications;
  return { ...user[0], ...items };
};
function Dashboard2() {
  let data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavbarLogged, {
        address: data.address
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: "px-10 pt-5 font-bold text-first text-2xl text-center",
        children: "What's going on ?"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:w-2/3 content-center m-auto",
        children: data.items.map((item) => {
          var _a, _b, _c;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Post, {
            id: item.id,
            name: item.profile.name,
            handle: item.profile.handle,
            profileImage: (_a = item.profile.picture.original) == null ? void 0 : _a.url,
            content: item.metadata.content,
            image: (_c = (_b = item.metadata.media[0]) == null ? void 0 : _b.original) == null ? void 0 : _c.url,
            collection: item.stats.totalAmountOfCollects,
            comments: item.stats.totalAmountOfComments,
            mirrors: item.stats.totalAmountOfMirrors,
            createdAt: item.createdAt
          }, item.id);
        })
      })
    ]
  });
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
            children: "Oh no!"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react5.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react5.Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavbarLogged, {
            address: "0x00"
          }),
          error.message,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react5.Scripts, {})
        ]
      })
    ]
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react6 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.Outlet, {});
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => Login
});
var import_node2 = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/components/Footer.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
    className: "fixed bottom-0 p-4 sm:p-6 w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {
        className: "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "sm:flex sm:items-center sm:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className: "text-sm text-gray-500 sm:text-center dark:text-gray-400",
            children: [
              "\xA9 2022",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                href: "https://flowbite.com/",
                className: "hover:underline",
                children: "Personal Token Protocol"
              }),
              ". All Rights Reserved."
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "flex mt-4 space-x-6 sm:justify-center sm:mt-0",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
              href: "https://github.com/personaltokenprotocol",
              className: "text-gray-500 hover:text-gray-900 dark:hover:text-white hidden sm:block",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
                  className: "w-5 h-5",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  })
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "sr-only",
                  children: "GitHub account"
                })
              ]
            })
          })
        ]
      })
    ]
  });
}

// app/blockchain/metamask.ts
var import_ethers = require("ethers");
function checkMetamaskAvailability() {
  console.log("[blockchain][metamask][checkMetamaskAvailability]");
  let { ethereum } = window;
  if (!ethereum)
    throw new Error("Metamask is not available");
  return !1;
}
async function loginWithMetamask() {
  console.log("[blockchain][metamask][loginWithMetamask]"), checkMetamaskAvailability();
  let [address] = await window.ethereum.request({
    method: "eth_requestAccounts"
  });
  return console.log("[blockchain][metamask]loginWithMetamask] address", address), address;
}

// app/routes/login.tsx
var import_md = require("react-icons/md"), import_jsx_runtime = require("react/jsx-runtime"), COLOR = "#06D6A0", action = async ({ request }) => {
  let address = (await request.formData()).get("address");
  return !address || typeof address != "string" ? null : (0, import_node2.redirect)("/dashboard");
};
function Login() {
  let submit = (0, import_react7.useSubmit)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react7.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "pt-10 grid place-items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
            className: "text-2xl font-semibold",
            children: "Connect wallet"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-10 rounded-xl shadow-ptp p-5 grid place-items-center w-5/6 sm:w-1/3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                type: "button",
                className: "text-white bg-first font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 disabled:opacity-50",
                onClick: async () => {
                  let address = await loginWithMetamask(), formData = new FormData();
                  formData.append("address", address), submit(formData, {
                    action: "/login/?index",
                    method: "post",
                    encType: "application/x-www-form-urlencoded",
                    replace: !0
                  });
                },
                children: "Connect wallet"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "pt-5",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex p-3 ",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_md.MdVisibility, {
                            color: COLOR,
                            className: "w-8 h-8 m-auto"
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "px-6 w-full",
                            children: "View only permission. We will never do anything without your approval"
                          })
                        ]
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex p-3 ",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_md.MdFavorite, {
                            color: COLOR,
                            className: "w-8 h-8 m-auto"
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "px-6 w-full",
                            children: "Trusted by 2 users"
                          })
                        ]
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex p-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                            src: "/lens-logo.jpeg",
                            alt: "lens",
                            className: "rounded-full w-8 -mx-1"
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "px-7",
                            children: "We using Lens protocol"
                          })
                        ]
                      })
                    })
                  ]
                })
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
    ]
  });
}

// app/routes/login/index.tsx
var login_exports2 = {};
__export(login_exports2, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action2,
  default: () => Navbar
});
var import_node3 = require("@remix-run/node"), import_react8 = require("@remix-run/react");
var import_jsx_runtime = require("react/jsx-runtime"), action2 = async ({ request }) => {
  let address = (await request.formData()).get("address");
  if (!address || typeof address != "string")
    return null;
  let user;
  try {
    user = await db.user.findUnique({
      where: {
        address
      }
    });
  } catch (error) {
    throw new Error("cannot find user, error: " + error);
  }
  return console.log(user == null ? void 0 : user.address), user != null && user.address || (console.log("[BFF][login] User not found. Creating new user."), await db.user.create({
    data: {
      address
    }
  })), (0, import_node3.redirect)("/dashboard");
};
function Navbar() {
  let submit = (0, import_react8.useSubmit)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
    className: "bg-bg border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "container flex flex-wrap justify-between items-center mx-auto",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react8.Link, {
          to: "/",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden md:block",
            children: "Personal token"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex md:order-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              type: "button",
              className: "text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ",
              children: "Polygon"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              type: "button",
              className: "text-white bg-first hover:bg-second font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3",
              onClick: async () => {
                let address = await loginWithMetamask(), formData = new FormData();
                formData.append("address", address), console.log("pasa por aca?"), submit(formData, {
                  action: "/login/?index",
                  method: "post",
                  encType: "application/x-www-form-urlencoded",
                  replace: !0
                });
              },
              children: "Connect wallet"
            })
          ]
        })
      ]
    })
  });
}
function ErrorBoundary2({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          error.message,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react8.Scripts, {})
        ]
      })
    ]
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "e98e87ee", entry: { module: "/build/entry.client-UIGEADTC.js", imports: ["/build/_shared/chunk-DKGF5N7N.js", "/build/_shared/chunk-JWP4XJYM.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KZGMNR5O.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/connect-wallet": { id: "routes/connect-wallet", parentId: "root", path: "connect-wallet", index: void 0, caseSensitive: void 0, module: "/build/routes/connect-wallet-Y2TD2AUJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/connected": { id: "routes/connected", parentId: "root", path: "connected", index: void 0, caseSensitive: void 0, module: "/build/routes/connected-PWOQ6WYZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-ZTPXNVHH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-4ZJXYWAH.js", imports: ["/build/_shared/chunk-JLPVYTXP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-QFRKXZKI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-JPFDUFGD.js", imports: ["/build/_shared/chunk-YO7XVLSN.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login/index": { id: "routes/login/index", parentId: "routes/login", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/login/index-TFXWEBB4.js", imports: ["/build/_shared/chunk-JLPVYTXP.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 } }, url: "/build/manifest-E98E87EE.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/connect-wallet": {
    id: "routes/connect-wallet",
    parentId: "root",
    path: "connect-wallet",
    index: void 0,
    caseSensitive: void 0,
    module: connect_wallet_exports
  },
  "routes/connected": {
    id: "routes/connected",
    parentId: "root",
    path: "connected",
    index: void 0,
    caseSensitive: void 0,
    module: connected_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/login/index": {
    id: "routes/login/index",
    parentId: "routes/login",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: login_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
