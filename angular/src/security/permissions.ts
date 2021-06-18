import { Roles } from 'src/security/roles';
import { Plans } from 'src/security/plans';
import { Storage } from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;
// here we give Permissions to users // 
export class Permissions {

  static get values() {
    return {

      dashboardRead:{
        id: 'dashboardRead',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      DashboardMemberRead: {
        id: 'DashboardMemberRead',
        allowedRoles: [roles.member],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit:{
        id: 'planEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin,roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin,roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin,roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin,roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin,roles.manager],
        allowedPlans: [plans.free,plans.growth,plans.enterprise,],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free,plans.growth,plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      informationCategoryImport: {
        id: 'informationCategoryImport',
        allowedRoles: [roles.admin,roles.member,roles.manager],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      informationCategoryCreate: {
        id: 'informationCategoryCreate',
        allowedRoles: [roles.admin , roles.member, roles.manager],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      informationCategoryEdit: {
        id: 'informationCategoryEdit',
        allowedRoles: [roles.admin, roles.member,roles.manager],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      informationCategoryDestroy: {
        id: 'informationCategoryDestroy',
        allowedRoles: [roles.admin ,roles.member,roles.manager],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      informationCategoryRead: {
        id: 'informationCategoryRead',
        allowedRoles: [roles.admin,roles.member,roles.manager],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      informationCategoryAutocomplete: {
        id: 'informationCategoryAutocomplete',
        allowedRoles: [roles.admin,roles.member,roles.manager],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      informationsImport: {
        id: 'informationsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      informationsCreate: {
        id: 'informationsCreate',
        allowedRoles: [roles.admin,roles.member,roles.manager],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.informationsImages,
          storage.informationsDocument,
        ],
      },
      informationsEdit: {
        id: 'informationsEdit',
        allowedRoles: [roles.admin,roles.member,roles.manager],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.informationsImages,
          storage.informationsDocument,
        ],
      },
      informationsDestroy: {
        id: 'informationsDestroy',
        allowedRoles: [roles.admin,roles.member,roles.manager],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.informationsImages,
          storage.informationsDocument,
        ],
      },
      informationsRead: {
        id: 'informationsRead',
        allowedRoles: [roles.admin,roles.member,roles.manager],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      informationsAutocomplete: {
        id: 'informationsAutocomplete',
        allowedRoles: [roles.admin,roles.member,roles.manager],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      testimonyCategoryImport: {
        id: 'testimonyCategoryImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      testimonyCategoryCreate: {
        id: 'testimonyCategoryCreate',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      testimonyCategoryEdit: {
        id: 'testimonyCategoryEdit',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      testimonyCategoryDestroy: {
        id: 'testimonyCategoryDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      testimonyCategoryRead: {
        id: 'testimonyCategoryRead',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      testimonyCategoryAutocomplete: {
        id: 'testimonyCategoryAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      activityImport: {
        id: 'activityImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      activityCreate: {
        id: 'activityCreate',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.activityImages,
          storage.activityAudio,
          storage.activityDocuments,
          storage.activityVideo,
        ],
      },
      activityEdit: {
        id: 'activityEdit',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.activityImages,
          storage.activityAudio,
          storage.activityDocuments,
          storage.activityVideo,
        ],
      },
      activityDestroy: {
        id: 'activityDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.activityImages,
          storage.activityAudio,
          storage.activityDocuments,
          storage.activityVideo,
        ],
      },
      activityRead: {
        id: 'activityRead',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      activityAutocomplete: {
        id: 'activityAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      testimonyImport: {
        id: 'testimonyImport',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      testimonyCreate: {
        id: 'testimonyCreate',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.testimonyImages,
          storage.testimonyAudio,
          storage.testimonyDocuments,
          storage.testimonyVideos,
        ],
      },
      testimonyEdit: {
        id: 'testimonyEdit',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.testimonyImages,
          storage.testimonyAudio,
          storage.testimonyDocuments,
          storage.testimonyVideos,
        ],
      },
      testimonyDestroy: {
        id: 'testimonyDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.testimonyImages,
          storage.testimonyAudio,
          storage.testimonyDocuments,
          storage.testimonyVideos,
        ],
      },
      testimonyRead: {
        id: 'testimonyRead',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      testimonyAutocomplete: {
        id: 'testimonyAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      tagsImport: {
        id: 'tagsImport',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      tagsCreate: {
        id: 'tagsCreate',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      tagsEdit: {
        id: 'tagsEdit',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      tagsDestroy: {
        id: 'tagsDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      tagsRead: {
        id: 'tagsRead',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      tagsAutocomplete: {
        id: 'tagsAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      partnerImport: {
        id: 'partnerImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      partnerCreate: {
        id: 'partnerCreate',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      partnerEdit: {
        id: 'partnerEdit',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      partnerDestroy: {
        id: 'partnerDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      partnerRead: {
        id: 'partnerRead',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      partnerAutocomplete: {
        id: 'partnerAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      partnerCategoryImport: {
        id: 'partnerCategoryImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      partnerCategoryCreate: {
        id: 'partnerCategoryCreate',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      partnerCategoryEdit: {
        id: 'partnerCategoryEdit',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      partnerCategoryDestroy: {
        id: 'partnerCategoryDestroy',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      partnerCategoryRead: {
        id: 'partnerCategoryRead',
        allowedRoles: [roles.admin,roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      partnerCategoryAutocomplete: {
        id: 'partnerCategoryAutocomplete',
        allowedRoles: [roles.admin, roles.manager, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      }, 
      // Salma : has permission to assign 
      hasPermissionToAssignTestimonyToUser: {
        id: 'hasPermissionToAssignTestimonyToUser',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },     
    };
  }


  // static get values() {
  //   return {
  //     dashboardRead:{
  //       id: 'dashboardRead',
  //       allowedRoles: [roles.admin , roles.manager],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //     },
  //     DashboardMemberRead: {
  //       id: 'DashboardMemberRead',
  //       allowedRoles: [roles.member],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //     },
  //     tenantEdit: {
  //       id: 'tenantEdit',
  //       allowedRoles: [roles.admin],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //     },
  //     tenantDestroy: {
  //       id: 'tenantDestroy',
  //       allowedRoles: [roles.admin],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //     },
  //     planEdit: {
  //       id: 'planEdit',
  //       allowedRoles: [roles.admin],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //     },
  //     planRead: {
  //       id: 'planRead',
  //       allowedRoles: [roles.admin],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //     },
  //     userEdit: {
  //       id: 'userEdit',
  //       allowedRoles: [roles.admin],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //     },
  //     userDestroy: {
  //       id: 'userDestroy',
  //       allowedRoles: [roles.admin],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //     },
  //     userCreate: {
  //       id: 'userCreate',
  //       allowedRoles: [roles.admin],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //     },
  //     userImport: {
  //       id: 'userImport',
  //       allowedRoles: [roles.admin],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //     },
  //     userRead: {
  //       id: 'userRead',
  //       allowedRoles: [roles.admin],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //     },
  //     userAutocomplete: {
  //       id: 'userAutocomplete',
  //       allowedRoles: [roles.admin],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //     },
  //     auditLogRead: {
  //       id: 'auditLogRead',
  //       allowedRoles: [roles.admin],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //     },
  //     settingsEdit: {
  //       id: 'settingsEdit',
  //       allowedRoles: [roles.admin],
  //       allowedPlans: [
  //         plans.free,
  //         plans.growth,
  //         plans.enterprise,
  //       ],
  //       allowedStorage: [
  //         storage.settingsBackgroundImages,
  //         storage.settingsLogos,
  //       ],
  //     },
  //     informationCategoryImport: {
  //       id: 'informationCategoryImport',
  //       allowedRoles: [roles.admin],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     informationCategoryCreate: {
  //       id: 'informationCategoryCreate',
  //       allowedRoles: [roles.admin,roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     informationCategoryEdit: {
  //       id: 'informationCategoryEdit',
  //       allowedRoles: [roles.admin,roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     informationCategoryDestroy: {
  //       id: 'informationCategoryDestroy',
  //       allowedRoles: [roles.admin,roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     informationCategoryRead: {
  //       id: 'informationCategoryRead',
  //       allowedRoles: [roles.admin,roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     informationCategoryAutocomplete: {
  //       id: 'informationCategoryAutocomplete',
  //       allowedRoles: [roles.admin,roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },

  //     informationsImport: {
  //       id: 'informationsImport',
  //       allowedRoles: [roles.admin,roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     informationsCreate: {
  //       id: 'informationsCreate',
  //       allowedRoles: [roles.admin,roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [
  //         storage.informationsImages,
  //         storage.informationsDocument,
  //       ],
  //     },
  //     informationsEdit: {
  //       id: 'informationsEdit',
  //       allowedRoles: [roles.admin,roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [
  //         storage.informationsImages,
  //         storage.informationsDocument,
  //       ],
  //     },
  //     informationsDestroy: {
  //       id: 'informationsDestroy',
  //       allowedRoles: [roles.admin,roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [
  //         storage.informationsImages,
  //         storage.informationsDocument,
  //       ],
  //     },
  //     informationsRead: {
  //       id: 'informationsRead',
  //       allowedRoles: [roles.admin ,roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     informationsAutocomplete: {
  //       id: 'informationsAutocomplete',
  //       allowedRoles: [roles.admin,roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },

  //     testimonyCategoryImport: {
  //       id: 'testimonyCategoryImport',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     testimonyCategoryCreate: {
  //       id: 'testimonyCategoryCreate',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     testimonyCategoryEdit: {
  //       id: 'testimonyCategoryEdit',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     testimonyCategoryDestroy: {
  //       id: 'testimonyCategoryDestroy',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     testimonyCategoryRead: {
  //       id: 'testimonyCategoryRead',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     testimonyCategoryAutocomplete: {
  //       id: 'testimonyCategoryAutocomplete',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },

  //     activityImport: {
  //       id: 'activityImport',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     activityCreate: {
  //       id: 'activityCreate',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [
  //         storage.activityImages,
  //         storage.activityAudio,
  //         storage.activityDocuments,
  //         storage.activityVideo,
  //       ],
  //     },
  //     activityEdit: {
  //       id: 'activityEdit',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [
  //         storage.activityImages,
  //         storage.activityAudio,
  //         storage.activityDocuments,
  //         storage.activityVideo,
  //       ],
  //     },
  //     activityDestroy: {
  //       id: 'activityDestroy',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [
  //         storage.activityImages,
  //         storage.activityAudio,
  //         storage.activityDocuments,
  //         storage.activityVideo,
  //       ],
  //     },
  //     activityRead: {
  //       id: 'activityRead',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     activityAutocomplete: {
  //       id: 'activityAutocomplete',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },

  //     testimonyImport: {
  //       id: 'testimonyImport',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     testimonyCreate: {
  //       id: 'testimonyCreate',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [
  //         storage.testimonyImages,
  //         storage.testimonyAudio,
  //         storage.testimonyDocuments,
  //         storage.testimonyVideos,
  //       ],
  //     },
  //     testimonyEdit: {
  //       id: 'testimonyEdit',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [
  //         storage.testimonyImages,
  //         storage.testimonyAudio,
  //         storage.testimonyDocuments,
  //         storage.testimonyVideos,
  //       ],
  //     },
  //     testimonyDestroy: {
  //       id: 'testimonyDestroy',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [
  //         storage.testimonyImages,
  //         storage.testimonyAudio,
  //         storage.testimonyDocuments,
  //         storage.testimonyVideos,
  //       ],
  //     },
  //     testimonyRead: {
  //       id: 'testimonyRead',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     testimonyAutocomplete: {
  //       id: 'testimonyAutocomplete',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },

  //     tagsImport: {
  //       id: 'tagsImport',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     tagsCreate: {
  //       id: 'tagsCreate',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     tagsEdit: {
  //       id: 'tagsEdit',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     tagsDestroy: {
  //       id: 'tagsDestroy',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     tagsRead: {
  //       id: 'tagsRead',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     tagsAutocomplete: {
  //       id: 'tagsAutocomplete',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },

  //     partnerImport: {
  //       id: 'partnerImport',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     partnerCreate: {
  //       id: 'partnerCreate',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     partnerEdit: {
  //       id: 'partnerEdit',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     partnerDestroy: {
  //       id: 'partnerDestroy',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     partnerRead: {
  //       id: 'partnerRead',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     partnerAutocomplete: {
  //       id: 'partnerAutocomplete',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },

  //     partnerCategoryImport: {
  //       id: 'partnerCategoryImport',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     partnerCategoryCreate: {
  //       id: 'partnerCategoryCreate',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     partnerCategoryEdit: {
  //       id: 'partnerCategoryEdit',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     partnerCategoryDestroy: {
  //       id: 'partnerCategoryDestroy',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //       allowedStorage: [

  //       ],
  //     },
  //     partnerCategoryRead: {
  //       id: 'partnerCategoryRead',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     partnerCategoryAutocomplete: {
  //       id: 'partnerCategoryAutocomplete',
  //       allowedRoles: [roles.admin, roles.manager, roles.member],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     },
  //     // Salma : has permission to assign
  //     hasPermissionToAssignTestimonyToUser: {
  //       id: 'hasPermissionToAssignTestimonyToUser',
  //       allowedRoles: [roles.admin, roles.manager],
  //       allowedPlans: [plans.free, plans.growth, plans.enterprise],
  //     }, 
  //   };
  // }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}
