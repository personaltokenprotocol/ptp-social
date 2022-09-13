var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

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
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
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
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }], meta = () => ({
  charset: "utf-8",
  title: "Personal token protocol",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/connect-wallet.tsx
var connect_wallet_exports = {};
__export(connect_wallet_exports, {
  default: () => ConnectWallet
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ConnectWallet() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "pt-10 grid place-items-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-2xl font-semibold ",
        children: "Connect wallet"
      }, void 0, !1, {
        fileName: "app/routes/connect-wallet.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            type: "button",
            className: "text-white bg-first hover:bg-second font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ",
            children: "Connect wallet"
          }, void 0, !1, {
            fileName: "app/routes/connect-wallet.tsx",
            lineNumber: 6,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "View only permission. We will never do anything withot your approval"
                }, void 0, !1, {
                  fileName: "app/routes/connect-wallet.tsx",
                  lineNumber: 15,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "Trusted by 0 persons"
                }, void 0, !1, {
                  fileName: "app/routes/connect-wallet.tsx",
                  lineNumber: 19,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "Lens protocol"
                }, void 0, !1, {
                  fileName: "app/routes/connect-wallet.tsx",
                  lineNumber: 20,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/connect-wallet.tsx",
              lineNumber: 14,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/connect-wallet.tsx",
            lineNumber: 13,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/connect-wallet.tsx",
        lineNumber: 5,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/connect-wallet.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/connected.tsx
var connected_exports = {};
__export(connected_exports, {
  default: () => Connected
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Connected() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "p-10",
    children: "Only if you are connected can see this page"
  }, void 0, !1, {
    fileName: "app/routes/connected.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Dashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
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
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function NavbarLogged({ address }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
    className: "bg-bg border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "container flex flex-wrap justify-between items-center mx-auto",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
          to: "/login",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden md:block"
          }, void 0, !1, {
            fileName: "app/components/NavbarLogged.tsx",
            lineNumber: 12,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/NavbarLogged.tsx",
          lineNumber: 11,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex md:order-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "button",
              className: "text-white bg-first hover:bg-second font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3",
              children: [
                address.slice(0, 6),
                "...",
                address.slice(-4)
              ]
            }, void 0, !0, {
              fileName: "app/components/NavbarLogged.tsx",
              lineNumber: 15,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
              to: "/login",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "button",
                className: "text-white bg-third hover:bg-first font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 hidden sm:block",
                children: "Logout"
              }, void 0, !1, {
                fileName: "app/components/NavbarLogged.tsx",
                lineNumber: 23,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/NavbarLogged.tsx",
              lineNumber: 22,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/NavbarLogged.tsx",
          lineNumber: 14,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/NavbarLogged.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/NavbarLogged.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), db = global.__db;

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
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "rounded-lg p-4 m-4 border-black border-2 flex flex-col justify-between",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex",
                children: [
                  profileImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    className: "w-10 h-10 rounded-full",
                    src: transformToIpfsUrl(profileImage),
                    alt: "avatar"
                  }, void 0, !1, {
                    fileName: "app/components/Social/Post.tsx",
                    lineNumber: 35,
                    columnNumber: 15
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-10 h-10 bg-first rounded-full ",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "text-center mt-1.5 text-white",
                        children: name.charAt(0)
                      }, void 0, !1, {
                        fileName: "app/components/Social/Post.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                      }, this),
                      " "
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/Social/Post.tsx",
                    lineNumber: 41,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "content-start",
                    children: [
                      name ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "text-black text-xs font-bold px-3",
                        children: name
                      }, void 0, !1, {
                        fileName: "app/components/Social/Post.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "text-black text-xs font-bold px-3",
                        children: handle
                      }, void 0, !1, {
                        fileName: "app/components/Social/Post.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "text-gray-500 text-xs px-3",
                        children: [
                          "@",
                          handle
                        ]
                      }, void 0, !0, {
                        fileName: "app/components/Social/Post.tsx",
                        lineNumber: 55,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/Social/Post.tsx",
                    lineNumber: 48,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/Social/Post.tsx",
                lineNumber: 33,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-gray-500 text-xs ",
                children: [
                  calculateHoursBetweenNowAndDate(createdAt),
                  " h"
                ]
              }, void 0, !0, {
                fileName: "app/components/Social/Post.tsx",
                lineNumber: 59,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Social/Post.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "pt-5",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "text-black text-sm text-justify whitespace-pre-line",
              children: resume(content)
            }, void 0, !1, {
              fileName: "app/components/Social/Post.tsx",
              lineNumber: 65,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/Social/Post.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this),
          image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "pt-3 ",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: transformToIpfsUrl(image),
              alt: "post"
            }, void 0, !1, {
              fileName: "app/components/Social/Post.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/Social/Post.tsx",
            lineNumber: 71,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Social/Post.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "divide-y bottom-0 pt-5",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, !1, {
            fileName: "app/components/Social/Post.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-gray-600 text-tiny m-auto ",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "font-bold",
                    children: [
                      collection,
                      " "
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/Social/Post.tsx",
                    lineNumber: 82,
                    columnNumber: 13
                  }, this),
                  " Collect"
                ]
              }, void 0, !0, {
                fileName: "app/components/Social/Post.tsx",
                lineNumber: 81,
                columnNumber: 11
              }, this),
              "\xA0 \xA0",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-gray-600 text-tiny m-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "font-bold",
                    children: [
                      comments,
                      " "
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/Social/Post.tsx",
                    lineNumber: 86,
                    columnNumber: 13
                  }, this),
                  " Comments"
                ]
              }, void 0, !0, {
                fileName: "app/components/Social/Post.tsx",
                lineNumber: 85,
                columnNumber: 11
              }, this),
              "\xA0 \xA0",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-gray-600 text-tiny m-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "font-bold",
                    children: [
                      mirrors,
                      " "
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/Social/Post.tsx",
                    lineNumber: 90,
                    columnNumber: 13
                  }, this),
                  "Mirrors"
                ]
              }, void 0, !0, {
                fileName: "app/components/Social/Post.tsx",
                lineNumber: 89,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Social/Post.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, !1, {
            fileName: "app/components/Social/Post.tsx",
            lineNumber: 94,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Social/Post.tsx",
        lineNumber: 77,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Social/Post.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = async () => {
  console.log("[BFF][dashboard]");
  let user = await db.user.findMany(), items = (await new import_graphql_request2.GraphQLClient("https://api.lens.dev/playground").request(ExplorePublications)).explorePublications;
  return { ...user[0], ...items };
};
function Dashboard2() {
  let data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavbarLogged, {
        address: data.address
      }, void 0, !1, {
        fileName: "app/routes/dashboard/index.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "px-10 pt-5 font-bold text-first text-2xl text-center",
        children: "What's going on ?"
      }, void 0, !1, {
        fileName: "app/routes/dashboard/index.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:w-2/3 content-center m-auto",
        children: data.items.map((item) => {
          var _a, _b, _c;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Post, {
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
          }, item.id, !1, {
            fileName: "app/routes/dashboard/index.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this);
        })
      }, void 0, !1, {
        fileName: "app/routes/dashboard/index.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/dashboard/index.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "Oh no!"
          }, void 0, !1, {
            fileName: "app/routes/dashboard/index.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
            fileName: "app/routes/dashboard/index.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Links, {}, void 0, !1, {
            fileName: "app/routes/dashboard/index.tsx",
            lineNumber: 70,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/index.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavbarLogged, {
            address: "0x00"
          }, void 0, !1, {
            fileName: "app/routes/dashboard/index.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          error.message,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
            fileName: "app/routes/dashboard/index.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/index.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/dashboard/index.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => Login
});
var import_node2 = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/components/Footer.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
    className: "fixed bottom-0 p-4 sm:p-6 w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {
        className: "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "sm:flex sm:items-center sm:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "text-sm text-gray-500 sm:text-center dark:text-gray-400",
            children: [
              "\xA9 2022",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: "https://flowbite.com/",
                className: "hover:underline",
                children: "Personal Token Protocol"
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 8,
                columnNumber: 11
              }, this),
              ". All Rights Reserved."
            ]
          }, void 0, !0, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 6,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex mt-4 space-x-6 sm:justify-center sm:mt-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "https://github.com/personaltokenprotocol",
              className: "text-gray-500 hover:text-gray-900 dark:hover:text-white hidden sm:block",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                  className: "w-5 h-5",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  }, void 0, !1, {
                    fileName: "app/components/Footer.tsx",
                    lineNumber: 39,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 33,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "sr-only",
                  children: "GitHub account"
                }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 41,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 13,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 5,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
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
var import_md = require("react-icons/md"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), COLOR = "#06D6A0", action = async ({ request }) => {
  let address = (await request.formData()).get("address");
  return !address || typeof address != "string" ? null : (0, import_node2.redirect)("/dashboard");
};
function Login() {
  let submit = (0, import_react7.useSubmit)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "pt-10 grid place-items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-2xl font-semibold",
            children: "Connect wallet"
          }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-10 rounded-xl shadow-ptp p-5 grid place-items-center w-5/6 sm:w-1/3",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
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
              }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 49,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "pt-5",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex p-3 ",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_md.MdVisibility, {
                            color: COLOR,
                            className: "w-8 h-8 m-auto"
                          }, void 0, !1, {
                            fileName: "app/routes/login.tsx",
                            lineNumber: 61,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                            className: "px-6 w-full",
                            children: "View only permission. We will never do anything without your approval"
                          }, void 0, !1, {
                            fileName: "app/routes/login.tsx",
                            lineNumber: 62,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/login.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 59,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex p-3 ",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_md.MdFavorite, {
                            color: COLOR,
                            className: "w-8 h-8 m-auto"
                          }, void 0, !1, {
                            fileName: "app/routes/login.tsx",
                            lineNumber: 71,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                            className: "px-6 w-full",
                            children: "Trusted by 2 users"
                          }, void 0, !1, {
                            fileName: "app/routes/login.tsx",
                            lineNumber: 72,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/login.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 69,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex p-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                            src: "/lens-logo.jpeg",
                            alt: "lens",
                            className: "rounded-full w-8 -mx-1"
                          }, void 0, !1, {
                            fileName: "app/routes/login.tsx",
                            lineNumber: 78,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                            className: "px-7",
                            children: "We using Lens protocol"
                          }, void 0, !1, {
                            fileName: "app/routes/login.tsx",
                            lineNumber: 83,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/login.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 76,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 58,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 57,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 91,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/login/index.tsx
var login_exports2 = {};
__export(login_exports2, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action2,
  default: () => Navbar
});
var import_node3 = require("@remix-run/node"), import_react8 = require("@remix-run/react");
var import_fs = __toESM(require("fs")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  let address = (await request.formData()).get("address");
  if (!address || typeof address != "string")
    return null;
  import_fs.default.readdir("./node_module", (err, files) => {
    console.log(files);
  });
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
    className: "bg-bg border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "container flex flex-wrap justify-between items-center mx-auto",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
          to: "/",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden md:block",
            children: "Personal token"
          }, void 0, !1, {
            fileName: "app/routes/login/index.tsx",
            lineNumber: 72,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/login/index.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex md:order-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "button",
              className: "text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 ",
              children: "Polygon"
            }, void 0, !1, {
              fileName: "app/routes/login/index.tsx",
              lineNumber: 77,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
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
            }, void 0, !1, {
              fileName: "app/routes/login/index.tsx",
              lineNumber: 84,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/login/index.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/login/index.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/login/index.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {}, void 0, !1, {
        fileName: "app/routes/login/index.tsx",
        lineNumber: 101,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          error.message,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Scripts, {}, void 0, !1, {
            fileName: "app/routes/login/index.tsx",
            lineNumber: 104,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/login/index.tsx",
        lineNumber: 102,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/login/index.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "cbe4007e", entry: { module: "/build/entry.client-LVYDOQHP.js", imports: ["/build/_shared/chunk-L47QLFMH.js", "/build/_shared/chunk-MLBUYSNZ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SPXVWKJY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/connect-wallet": { id: "routes/connect-wallet", parentId: "root", path: "connect-wallet", index: void 0, caseSensitive: void 0, module: "/build/routes/connect-wallet-SI75VZ2J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/connected": { id: "routes/connected", parentId: "root", path: "connected", index: void 0, caseSensitive: void 0, module: "/build/routes/connected-4UMHIVBK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-GLLP5WTC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-RVQHZTUW.js", imports: ["/build/_shared/chunk-DWVSHSKJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-AXRSTLTY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-GDJZ5FDI.js", imports: ["/build/_shared/chunk-B4DCL6UY.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login/index": { id: "routes/login/index", parentId: "routes/login", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/login/index-OFJRHRQZ.js", imports: ["/build/_shared/chunk-DWVSHSKJ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 } }, url: "/build/manifest-CBE4007E.js" };

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
//# sourceMappingURL=server.js.map
