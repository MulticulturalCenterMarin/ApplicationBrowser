"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _graphqlTools=require("graphql-tools"),_resolvers=require("../resolvers"),_resolvers2=_interopRequireDefault(_resolvers);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var schema="\n# --------------- Query | Root Level ---------------\ntype Query {\n  list(entity: String!,branch: [String],boundaries: ReadBoundaries, order: ReadOrder): List\n  item\n  (\n    entity: String!,\n    branch: [String],\n    boundaries: ReadBoundaries,\n    order: ReadOrder\n  ): Item\n\n  user\n  (\n    uid: String!,\n    boundaries: ReadBoundaries,\n    order: ReadOrder\n  ): User\n\n  organization\n  (\n    pointer: String!,\n    boundaries: ReadBoundaries,\n    order: ReadOrder\n  ): Organization\n\n  project\n  (\n    uid: String!\n    boundaries: ReadBoundaries,\n    order: ReadOrder\n  ): Project\n\n  task\n  (\n    uid: String!,\n    boundaries: ReadBoundaries,\n    order: ReadOrder\n  ): Task\n  \n  order\n  (\n    uid: String!,\n    boundaries: ReadBoundaries,\n    order: ReadOrder\n  ): Order\n  \n  activity\n  (\n    boundaries: ReadBoundaries, \n    order: ReadOrder\n  ): Project\n}\n\n# --------------- List | Query.List ---------------\n# @type List\n# @requirements $entity:String\n# @description Lists return items of top-level entities\n# @parent Query\n# @children User,Task,Project,Order\n\ntype List {\n  id: String\n  users: [User]\n  organizations: [Organization]\n  tasks: [Task]\n  projects: [Project]\n  orders: [Order]\n  items: [Item]\n}\n\n# --------------- Product | Query.Product - Query.List.Product ---------------\n\n# Item is a generic wrapper for general query requests.\n\n# Components on the Frontend can easily create simple query structures via the predictable\n# structure and naming conventions shared across the database branch\ntype Item {\n  authentication: UserAuthentication\n  metadata: ItemMetadata\n  identity: ItemIdentity\n  pointer: String\n  time: ItemTime\n  roles: [Role]\n}\n\n# Query.User.UserName\ntype ItemIdentity {\n  address: ItemAddress\n  contact: ItemContact\n  name: ItemName\n}\n\n# Query.User.UserName\ntype ItemName {\n  nameDisplay: String\n  nameFirst: String\n  nameLast: String\n  nameOrganization: String\n  nameOrganizationLegal: String\n}\n\ntype ItemAddress {\n  addressStreet: String\n  addressCity: String\n  addressState: String\n  addressZip: String\n  addressCountry: String\n}\n\ntype ItemContact {\n  biography: String\n  contactEmail: String\n  contactPhone: String\n  contactURL: String\n}\n\ntype ItemTime {\n  dateStart: String\n  dateEnd: String\n  hourStart: String\n  hourEnd: String\n  minuteStart: String\n  minuteEnd: String\n}\n\ntype ItemMetadata {\n  metaCreated: String\n  metaEdited: String\n}\n\n# --------------- Authentication | Query.Authentication - Query.List.Authentication ---------------\ntype Authentication {\n  emailVerified: Boolean\n  source: String\n  status: String\n}\n\ntype Parent {\n  uid: String\n  type: String\n}\n\ntype Permission {\n  link: String\n  levels: String\n}\n\ntype PermissionLevel {\n  name: String\n  active: Boolean\n}\n\ntype Role {\n  name: String\n  active: Boolean\n}\n\n# --------------- List | Query.List - Query.List.User ---------------\n# Query.User \ntype User {\n  uid: String\n  pointer: String\n  dateCreated: String\n  dateModified: String\n  authentication: UserAuthentication\n  identity: UserIdentity\n  tasks: [TaskSlice]\n  permissions: [Permission]\n  projects: [ProjectSlice]\n  roles: [Role]\n}\ntype UserRole {\n  role: Boolean\n}\n\n# Query.User.UserAuthentication\ntype UserAuthentication {\n  email: String\n  emailVerified: Boolean\n  authentications: [Authentication]\n}\n\n# Query.User.UserIdentity\ntype UserIdentity {\n  address: UserAddress\n  biography: UserBiography\n  contact: UserContact\n  name: UserName\n  images: UserImages\n}\n# Query.User.UserAddress\ntype UserAddress {\n  addressStreet: String\n  addressCity: String\n  addressState: String\n  addressZip: String\n  addressCountry: String\n}\n\n# Query.User.UserBiography\ntype UserBiography {\n  biographyMission: String\n  biographyOccupation: String\n  biographySkills: String\n  biographyOverview: String\n}\n\n# Query.User.UserContact\ntype UserContact {\n  biography: String\n  contactEmail: String\n  contactPhone: String\n  contactURL: String\n}\n\n# Query.User.UserImages\ntype UserImages {\n  imageBackground: String\n  imageProfile: String\n}\n\n# Query.User.UserName\ntype UserName {\n  nameDisplay: String\n  nameFirst: String\n  nameLast: String\n}\n\n# Query.User.UserStatus\ntype UserStatus {\n  active: Boolean\n}\n\n# --------------- List | Query.List - Query.List.Organization ---------------\n# Query.Organization \ntype Organization {\n  uid: String\n  pointer: String\n  dateCreated: String\n  dateModified: String\n  authentication: OrganizationAuthentication\n  identity: OrganizationIdentity\n  tasks: [TaskSlice]\n  permissions: [Permission]\n  projects: [ProjectSlice]\n  roles: [Role]\n}\ntype OrganizationRole {\n  role: Boolean\n}\n\n# Query.Organization.OrganizationAuthentication\ntype OrganizationAuthentication {\n  email: String\n  emailVerified: Boolean\n  authentications: [Authentication]\n}\n\n# Query.Organization.OrganizationIdentity\ntype OrganizationIdentity {\n  address: OrganizationAddress\n  biography: OrganizationBiography\n  contact: OrganizationContact\n  name: OrganizationName\n  images: OrganizationImages\n}\n# Query.Organization.OrganizationAddress\ntype OrganizationAddress {\n  addressStreet: String\n  addressCity: String\n  addressState: String\n  addressZip: String\n  addressCountry: String\n}\n\n# Query.Organization.OrganizationBiography\ntype OrganizationBiography {\n  biographyMission: String\n  biographyOccupation: String\n  biographySkills: String\n  biographyOverview: String\n}\n\n# Query.Organization.OrganizationContact\ntype OrganizationContact {\n  biography: String\n  contactEmail: String\n  contactPhone: String\n  contactURL: String\n}\n\n# Query.Organization.OrganizationImages\ntype OrganizationImages {\n  imageBackground: String\n  imageProfile: String\n}\n\n# Query.Organization.OrganizationName\ntype OrganizationName {\n  nameDisplay: String\n  nameFirst: String\n  nameLast: String\n}\n\n# Query.Organization.OrganizationStatus\ntype OrganizationStatus {\n  active: Boolean\n}\n\n# --------------- Product | Query.Order - Query.List.Order ---------------\ntype Order {\n  id: String!\n  uid: String!\n  pid: String!\n  products: [ProductFragment]\n}\n\ntype OrderFragment {\n  id: String!\n  uid: String!\n  pid: String!\n  products: [ProductFragment]\n}\n\n# --------------- Product | Query.Product - Query.List.Product ---------------\ntype PaymentMethodFragment {\n  id: String!\n}\n\n# --------------- Product | Query.Product - Query.List.Product ---------------\ntype ProductFragment {\n  id: String!\n  name: String\n  priceDisplay: String\n  priceRaw: Int \n}\n\ntype Product {\n  id: String!\n  name: String\n  description: String\n  parent: String\n  priceDisplay: String\n  priceRaw: Int\n  tags: [Tag]\n}\n\n# --------------- Project | Query.Project - Query.List.Project ---------------\ntype Project {\n  uid: String!\n  type: String\n  name: String\n  users: [User]\n  tasks: [Task]\n  timelines: [Timeline]\n  resources: [Resource]\n  permissions: ProjectPermissions\n}\n\ntype ProjectPermissions {\n  access: String # Authentication and sharability\n  published: Boolean # Database boundary and filtering \n  owners: [ParticipantPermissions]\n  contributors: [ParticipantPermissions]\n}\n\ntype ParticipantPermissions {\n  uid: String\n  active: Boolean\n}\n\ntype ProjectSlice {\n  uid: String!\n  name: String\n  notifications: [ProjectNotifications]\n}\n\ntype ProjectNotifications {\n  id: String!\n}\n\n# --------------- Tag | Query.Tag - Query.List.Tag ---------------\ntype Tag {\n  id: String!\n  name: String\n}\n\n# --------------- Task | Query.Task - Query.List.Tasks ---------------\ntype Task {\n  uid: String\n  name: String\n  description: String\n  parent: [Parent]\n}\n\ntype TaskSlice {\n  uid: String!\n  name: String\n  description: String\n}\n\n# --------------- Resource | Query.Resource - Query.List.Resources ---------------\ntype Resource {\n  uid: String!\n  name: String\n  description: String\n}\n\n# --------------- Timeline | Query.Timeline - Query.List.Timeline ---------------\ntype Timeline {\n  tid: String!\n  name: String\n  dateStart: String\n  dateEnd: String\n  status: TimelineStatus\n  events: [TimelineEvent]\n  predictions: [TimelinePrediction]\n}\n\ntype TimelineStatus {\n  momentum: String\n  health: String\n}\n\ntype TimelineEvent {\n  eid: String!\n  name: String!\n  date: String!\n  time: String!\n  significance: String!\n}\n\ntype TimelinePrediction {\n  eid: String!\n  name: String!\n  date: String!\n  time: String!\n  significance: String!\n}\n\ntype DatabaseRead {\n  startAt: String\n  endAt: String\n  equalTo: String\n  limitToFirst: Int\n  limitToLast: Int\n  orderByChild: String\n  orderByKey: String\n  orderByPriority: String\n  orderByValue: String\n  startAt: String\n  toJSON: String\n  toString: String\n}\n\ntype DatabaseFilter {\n  filter: String!\n  value: String\n}\n\ntype Filter {\n  id: String\n}\n\ntype Mutation {\n  taskAdd (\n    title: String!\n    description: String\n  ): Task\n}\n#--- Input | Query.List ---#\n# @input ReadBoundaries\n# @parent Query.List\ninput ReadBoundaries {\n  limitToFirst: Int\n  limitToLast: Int\n  startAt: Int\n  endAt: Int\n  equalTo: String\n}\n\n# @input ReadOrder\n# @parent Query.List\ninput ReadOrder {\n  orderByKey: Boolean # Key ==== Timestamp\n  orderByChild: String\n  orderByValue: String\n  reverse: Boolean\n}\n\n";exports.default=(0,_graphqlTools.makeExecutableSchema)({typeDefs:schema,resolvers:_resolvers2.default}),module.exports=exports["default"];
//# sourceMappingURL=index.js.map