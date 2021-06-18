const es = {
  notifications: { 
    readll : 'Tout marquer comme lu',
    deletll:'Supprimer tout',
    viewll:'Afficher toutes les notifications',  
  },
  common: {
    or: 'Ou',
    cancel: 'Annuler',
    reset: 'Réinitialiser',
    save: 'Enregistrer',
    search: 'Rechercher',
    edit: 'Editer',
    remove: 'Suppprimer',
    new: 'Nouveau',
    export: 'Exporter vers Excel',
    noDataToExport: 'Aucune donnée à exporter',
    import: 'Importer',
    discard: 'Abandonner',
    yes: 'Oui',
    no: 'Non',
    pause: 'Pause',
    areYouSure: 'Vous êtes sûr?',
    view: 'Afficher',
    destroy: 'Supprimer',
    mustSelectARow: 'Vous devez sélectionner une ligne',
    confirm: 'Confirmer',
    start: 'Début',
    end: 'Fin',
    filters: 'Filtres',
    information: 'Informations',
    attachements: 'Attachements',
    history: 'Historique',
    addActivity: 'Nouvelle activité',
    required: 'Remplissez des champs obligatoires',
    ok: 'Ok'
  },
  app: {
    title: 'MIGRIGHTS',
  },
  entities: {
  informationCategory: {
        name: "Catégorie d'informations",
        label: "Catégories d'informations",
        menu: "Catégories",
        exporterFileName: 'Exporter les informations des catégories',
        list: {
          menu: "Catégories d'informations",
          title: "Catégories d'informations",
        },
        create: {
          success: 'Catégorie enregistrée avec succès',
        },
        update: {
          success: 'Catégorie enregistrée avec succès',
        },
        destroy: {
          success: 'Catégorie supprimée avec succès',
        },
        destroyAll: {
          success: 'Catégorie (s) supprimée (s) avec succès',
        },
        edit: {
          title: 'Modifier la catégorie',
        },
        fields: {
          id: 'Id',
          'titleFR': 'Titre en Français',
          'titleEN': 'Titre en Anglais',
          'titleAR': 'Titre en Arabe',
          'descriptionFR': 'Description en Français',
          'descriptionEN': 'Description en Anglais',
          'descriptionAR': 'Description en Arabe',
          'addressFR' : 'Address en Français',
          'addressAR' : 'Address en Arabe',
          'addressEN' : 'Address en Anglais',
          'type' : 'Type',
          'publish' : 'Publier',
          'num_Tel' : 'Numero de telephone', 
          'site_web' : 'site Web', 
          'email' : 'Adresse e-mail', 
          
          createdAt: 'Créé le',
          updatedAt: 'Mis à jour le',
          createdAtRange: 'Créé le',
        },
        enumerators: {

        },
        new: {
          title: 'Nouvelle catégorie',
        },
        view: {
          title: 'Voir la catégorie',
        },
        importer: {
          title: "Importer des catégories d'informations",
          fileName: "modèle d'importation de catégorie d'informations",
          hint:
            'Les colonnes Fichiers / Images doivent être les URL des fichiers séparés par un espace.',
        },
      },

    informations: {
        name: 'informations',
        label: 'Informations',
        menu: 'Informations',
        exporterFileName: 'Exporter des informations',
        list: {
          menu: 'Informations',
          title: 'Informations',
        },
        create: {
          success: 'Informations enregistrées avec succès',
        },
        update: {
          success: 'Informations enregistrées avec succès',
        },
        destroy: {
          success: 'Informations supprimées avec succès',
        },
        destroyAll: {
          success: 'Informations supprimées avec succès',
        },
        edit: {
          title: 'Modifier les informations',
        },
        fields: {
          id: 'Id',
          'category': 'Catégorie',
          'titleFR': 'Titre en Français',
          'titreEN': 'Titre en Anglais',
          'titreAR': 'Titre en Arabe',
          'descriptionFR': 'Description en Français',
          'descriptionEN': 'Description en Anglais',
          'descriptionAR': 'Description en Arabe',
          'addressFR' : 'Address en Français',
          'addressAR' : 'Address en Arabe',
          'addressEN' : 'Address en Anglais',
          'num_Tel' : 'Numero de telephone', 
          'site_web' : 'site Web', 
          'type' : 'Type',
          'publish' : 'Publier',
          'email' : 'Adresse e-mail', 
          'images': 'Images',
          'document': 'Document',
          'videos': 'Vidéos',
          'googleMapsPosition': 'Position sur Google Maps',
          'tags': 'Tags',
          createdAt: 'Créé le',
          updatedAt: 'Mis à jour le',
          createdAtRange: 'Créé le',
        },
        enumerators: {
          'type':{
            'information':'Informations',
            'news':'Actualité'
               },
          'publish':{
            'true':'Oui',
            'false':'Non'
          }
        },
        new: {
          title: 'Nouvelles informations',
        },
        view: {
          title: 'Voir les informations',
        },
        importer: {
          title: 'Importer des informations',
          fileName: "modèle d'importation d'informations",
          hint:
            'Les colonnes Fichiers / Images doivent être les URL des fichiers séparés par un espace.',
        },
      },

    testimonyCategory: {
        name: 'Catégorie de témoignage',
        label: 'Catégories des témoignages',
        menu: 'Catégories',
        exporterFileName: "Catégorie de témoignage d'exportation",
        list: {
          menu: 'Catégories des témoignages',
          title: 'Catégories des témoignages',
        },
        create: {
          success: 'Catégorie enregistrée avec succès',
        },
        update: {
          success: 'Catégorie enregistrée avec succès',
        },
        destroy: {
          success: 'Catégorie supprimée avec succès',
        },
        destroyAll: {
          success: 'Catégorie (s) supprimée (s) avec succès',
        },
        edit: {
          title: 'Modifier la catégorie',
        },
        fields: {
          id: 'Id',
          'titleFR': 'Titre en Français',
          'titleEN': 'Titre en Anglais',
          'titleAR': 'Titre en Arabe',
          'descriptionFR': 'Description en Français',
          'descriptionEN': 'Description en Anglais',
          'descriptionAR': 'Description en Arabe',
          createdAt: 'Créé le',
          updatedAt: 'Mis à jour le',
          createdAtRange: 'Créé le',
        },
        enumerators: {

        },
        new: {
          title: 'Nouvelle catégorie',
        },
        view: {
          title: 'Voir la catégorie',
        },
        importer: {
          title: 'Importer des catégories de témoignages',
          fileName: "Modèle d'importation de catégorie de témoignage",
          hint:
            'Les colonnes Fichiers / Images doivent être les URL des fichiers séparés par un espace.',
        },
      },

    activity: {
        name: 'Activité',
        label: 'Activités',
        menu: 'Activités',
        exporterFileName: "Exporter l'acivité",
        list: {
          menu: 'Activités',
          title: 'Activités',
        },
        create: {
          success: 'Activité enregistrée avec succès',
        },
        update: {
          success: 'Activité enregistrée avec succès',
        },
        destroy: {
          success: 'Activité supprimée avec succès',
        },
        destroyAll: {
          success: 'Activité (s) supprimée (s) avec succès',
        },
        edit: {
          title: "Modifier l'activité",
        },
        fields: {
          id: 'Id',
          date: 'Date',
          'comment': 'Commentaire',
          'images': 'Images',
          'audio': 'Audio',
          'documents': 'Documents',
          'video': 'Vidéo',
          'position': 'Position',
          createdAt: 'Créé le',
          updatedAt: 'Mis à jour le',
          createdAtRange: 'Créé le',
        },
        enumerators: {

        },
        new: {
          title: 'Nouveau Activité',
        },
        view: {
          title: 'Voir Activité',
        },
        importer: {
          title: 'Importer Activités',
          fileName: "modèle d'importation d'activité",
          hint:
            'Les colonnes Fichiers / Images doivent être les URL des fichiers séparés par un espace.',
        },
      },

    testimony: {
        name: 'Témoignage',
        label: 'Témoignages',
        menu: 'Témoignages',
        exporterFileName: 'Exporter les Témoignages',
        list: {
          menu: 'Témoignages',
          title: 'Témoignages',
        },
        create: {
          success: 'Témoignage enregistré avec succès',
        },
        update: {
          success: 'Témoignage enregistré avec succès',
        },
        destroy: {
          success: 'Témoignage supprimé avec succès',
        },
        destroyAll: {
          success: 'Témoignage(s) supprimé (s) avec succès',
        },
        edit: {
          title: 'Editer Témoignage',
        },
        fields: {
          id: 'Id',
          'category': 'Catégorie',
          'title': 'Titre',
          'description': 'Description',
          'region': 'Région',
          'testimonyType': 'Type',
          'status': 'Statut',
          'priority': 'Priorité',
          'assignedTo': 'Assigné à',
          'images': 'Images',
          'audio': 'Audio',
          'documents': 'Documents',
          'videos': 'Vidéos',
          'position': 'Position',
          'anonymous': 'Anonyme',
          'activity': 'Activité',
          'tags': 'Tags',
          'transferTo': 'Transférer à',
          'createdBy': 'Créé par',
          createdAt: 'Créé le',
          updatedAt: 'Mis à jour le',
          createdAtRange: 'Créé le',
          contact: 'Moyen de Communication'
        },
        enumerators: {
          'region': {
            'tunis': 'Tunis',
            'ariana': 'Ariana',
            'beja': 'Beja',
            'ben_arouss': 'Ben Arous',
            'bizerte': 'Bizerte',
            'gabes': 'Gabes',
            'gafsa': 'Gafsa',
            'jendouba': 'Jendouba',
            'kairouan': 'Kairouan',
            'kasserine': 'Kasserine',
            'kebili': 'Kebili',
            'kef': 'Kef',
            'mahdia': 'Mahdia',
            'manouba': 'Manouba',
            'medenine': 'Medenine',
            'monastir': 'Monastir',
            'nabeul': 'Nabeul',
            'sfax': 'Sfax',
            'sidi_bouzid': 'Sidi Bouzid',
            'siliana': 'Siliana',
            'sousse': 'Sousse',
            'tataouine': 'Tataouine',
            'tozeur': 'Tozeur',
            'zaghouan': 'Zaghouan',
            'null': 'Aucune Region'
          },
          'status': {
            'waiting': 'En attente',
            'open': 'En Cours',
            'closed': 'Fermé',
            'canceled': 'Annulé',
          },
          'priority': {
            'low': 'Faible',
            'medium': 'Moyenne',
            'high': 'Haute',
          
          },
          'testimonyType':{
            'testimony':'Témoignage',
            'assistance':'Assistance'
          },
        },
        new: {
          title: 'Nouveau Témoignage',
        },
        view: {
          title: 'Voir Témoignage',
        },
        importer: {
          title: 'Importer Témoignages',
          fileName: "Modèle d'importation de Témoignage",
          hint:
            'Les colonnes Fichiers / Images doivent être les URL des fichiers séparés par un espace.',
        },
      },

    tags: {
        name: 'tags',
        label: 'Tags',
        menu: 'Tags',
        exporterFileName: 'Exporter les Tags',
        list: {
          menu: 'Tags',
          title: 'Tags',
        },
        create: {
          success: 'Tags enregistré avec succès',
        },
        update: {
          success: 'Tags enregistré avec succès',
        },
        destroy: {
          success: 'Tags supprimé avec succès',
        },
        destroyAll: {
          success: 'Tags(s) supprimé (s) avec succès',
        },
        edit: {
          title: 'Editer Tags',
        },
        fields: {
          id: 'Id',
          'titleFR': 'Titre en Français',
          'titleEN': 'Titre en Anglais',
          'titleAR': 'Titre en Arabe',
          createdAt: 'Créé le',
          updatedAt: 'Mis à jour le',
          createdAtRange: 'Créé le',
        },
        enumerators: {

        },
        new: {
          title: 'Nouveau Tag',
        },
        view: {
          title: 'Voir le Tag',
        },
        importer: {
          title: 'Importer Tags',
          fileName: "Modèle d'importation de Tags",
          hint:
            'Les colonnes Fichiers / Images doivent être les URL des fichiers séparés par un espace.',
        },
      },

    partner: {
        name: 'partenaire',
        label: 'Partenaires',
        menu: 'Partenaires',
        exporterFileName: 'Exporter les partenaires',
        list: {
          menu: 'Partenaires',
          title: 'Partenaires',
        },
        create: {
          success: 'Partenaire enregistré avec succès',
        },
        update: {
          success: 'Partenaire enregistré avec succès',
        },
        destroy: {
          success: 'Partenaire supprimé avec succès',
        },
        destroyAll: {
          success: 'Partenaire(s) supprimé avec succès',
        },
        edit: {
          title: 'Editer Partenaire',
        },
        fields: {
          id: 'Id',
          'category': 'Catégorie',
          'title': 'Titre',
          'desription': 'Desription',
          'phone': 'Téléphone',
          'mobile': 'Mobile',
          'address': 'Adresse',
          'email': 'Email',
          createdAt: 'Créé le',
          updatedAt: 'Mis à jour le',
          createdAtRange: 'Créé le',
        },
        enumerators: {

        },
        new: {
          title: 'Nouveau Partenaire',
        },
        view: {
          title: 'Voir Partenaire',
        },
        importer: {
          title: 'Importer Partenaires',
          fileName: "Modèle d'importation des partenaires",
          hint:
            'Les colonnes Fichiers / Images doivent être les URL des fichiers séparés par un espace.',
        },
      },

    partnerCategory: {
        name: 'Catégorie de partenaire',
        label: 'Catégories des Partenaires',
        menu: 'Catégories des Partenaires',
        exporterFileName: 'Exporter les Catégories des Partenaires',
        list: {
          menu: 'Catégories des Partenaires',
          title: 'Catégories des Partenaires',
        },
        create: {
          success: 'Catégorie de partenaire enregistré avec succès',
        },
        update: {
          success: 'Catégorie de partenaire enregistré avec succès',
        },
        destroy: {
          success: 'Catégorie de partenaire supprimé avec succès',
        },
        destroyAll: {
          success: 'Catégorie de partenaire(s) supprimé avec succès',
        },
        edit: {
          title: 'Editer Catégorie de partenaire',
        },
        fields: {
          id: 'Id',
          'titleFR': 'Titre',
          'description': 'Description',
          createdAt: 'Créé le',
          updatedAt: 'Mis à jour le',
          createdAtRange: 'Créé le',
        },
        enumerators: {

        },
        new: {
          title: 'Nouvelle Catégorie de partenaire',
        },
        view: {
          title: 'Voir Catégorie de partenaire',
        },
        importer: {
          title: 'Importer Catégorie de partenaires',
          fileName: "Modèle d'importation des catégories des partenaires",
          hint:
            'Les colonnes Fichiers / Images doivent être les URL des fichiers séparés par un espace.',
        },
      },
  },
  auth: {
    tenants: 'Espaces de travail',
    profile: {
      title: 'Profil',
      success: 'Profil mis à jour avec succés',
    },
    createAnAccount: 'Créer un compte',
    rememberMe: 'Se souvenir du mot de passe',
    forgotPassword: 'Votre mot de passe oublié',
    signin: 'Ouvrir une session',
    signup: "S'inscrire",
    signout: 'Déconnecter',
    alreadyHaveAnAccount:
      "Avez-vous déjà un compte? S'inscrire.",
    signinWithAnotherAccount:
      'Connectez-vous avec un autre compte',
    passwordChange: {
      title: 'Changer le mot de passe',
      success: 'Le mot de passe a été changé avec succès',
      mustMatch: 'les mots de passe doivent correspondre',
    },
    emailUnverified: {
      message:
        'Confirmez votre email à <strong>{0}</strong> pour continuer.',
      submit: 'Renvoyer la vérification par e-mail',
    },
    emptyPermissions: {
      message:
        "Vous n'avez pas encore d'autorisations. Attendez que l'administrateur vous accorde des privilèges.",
    },
    inactive: {
      message:
        "Votre compte est désactivé, veuillez contacter l'administration.",
    },
    passwordResetEmail: {
      message:
        'Envoyer un e-mail de réinitialisation du mot de passe',
      error: 'Email non reconnu',
    },
    passwordReset: {
      message: 'Réinitialisez votre mot de passe',
    },
    emailAddressVoirificationEmail: {
      error: 'Email non reconnu',
    },
    verificationEmailSuccess:
      'E-mail de vérification envoyé avec succès',
    passwordResetEmailSuccess:
      'E-mail de réinitialisation du mot de passe envoyé avec succès',
    passwordResetSuccess:
      'Le mot de passe a été changé avec succès',
    verifyEmail: {
      success: 'Email vérifié avec succès.',
      message:
        'Un instant, votre email est en cours de vérification ...',
    },
  },
  tenant: {
    name: 'tenant',
    label: 'Espaces de travail',
    menu: 'Espaces de travail',
    list: {
      menu: 'Espaces de travail',
      title: 'Espaces de travail',
    },
    create: {
      button: 'Créer un espace de travail',
      success: "L'espace de travail a bien été enregistré",
    },
    update: {
      success: "L'espace de travail a bien été enregistré",
    },
    destroy: {
      success: "L'espace de travail a bien été supprimé",
    },
    destroyAll: {
      success:
        'Espace (s) de travail supprimé avec succès',
    },
    edit: {
      title: "Modifier l'espace de travail",
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: "Nom de l'espace de travail",
      tenantId: 'Espace de travail',
      tenantUrl: "URL de l'espace de travail",
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nouvel espace de travail',
    },
    invitation: {
      view: 'Voir les invitations',
      invited: 'Invité',
      accept: "Accepter l'invitation",
      decline: "Refuser l'invitation",
      declined: 'Invitation refusée avec succès',
      acceptWrongEmail:
        "Acceptez l'invitation avec cet e-mail",
    },
    select: "Sélectionnez l'espace de travail",
    validation: {
      url:
        "L'URL de votre espace de travail ne peut contenir que des lettres minuscules, des chiffres et des traits d'union (et doit commencer par une lettre ou un chiffre).",
    },
  },
  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all business resources',
    },
    manager: {
      label: 'Manager',
      description: "Manager de l'application",
    },
    member: {
      label: "Membre",
      description: "Membre de l'équipe Task-Force",
    },
    migrant: {
      label: 'Migrant',
      description: 'Migrant',
    }
  },
  user: {
    invite: 'Invitation',
    title: 'Utilisateurs',
    menu: 'Utilisateurs',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nom complet',
      firstName: 'Prénom',
      lastName: 'Nom',
      status: 'Statut',
      disabled: 'Désactivé',
      phoneNumber: 'Numéro de téléphone',
      nationality: 'Nationalité',
      birthDate: 'Date de naissance',
      role: 'Rôle',
      createdAt: 'Créé le',
      updatedAt: 'Mis à jour le',
      roleUser: 'Rôle/Utilisateur',
      roles: 'Rôles',
      createdAtRange: 'Créé le',
      password: 'Mot de passe',
      rememberMe: 'Se souvenir du mot de passe',
      oldPassword: 'Mot de passe Ancien',
      newPassword: 'Nouveau mot de passe',
      newPasswordConfirmation:
        'Confirmation du nouveau mot de passe',
    },
    enabled: 'Activée',
    disabled: 'Désactivé',
    validations: {
      // eslint-disable-next-line
      email: "Le courriel ${value} n'est pas valide",
    },
    disable: 'Désactiver',
    enable: 'Activer',
    doEnableSuccess: 'Utilisateur activé avec succès',
    doDisableSuccess: 'Utilisateur désactivé avec succès',
    doDisableAllSuccess:
      'Utilisateur(s) désactivé avec succès',
    doEnableAllSuccess:
      'Utilisateur(s) activé (s) avec succès',
    doAddSuccess: 'Utilisateur(s) enregistré (s) correctement',
    doUpdateSuccess: 'Utilisateur enregistré avec succès',
    status: {
      active: 'Actif',
      invited: 'Invité',
      'empty-permissions': 'En attente de permission',
      inactive: 'Inactif',
    },
    exporterFileName: 'Exporter des utilisateurs',
    doDestroySuccess: 'Utilisateur supprimé avec succès',
    doDestroyAllSelectedSuccess:
      'Utilisateur(s) supprimé (s) avec succès',
    edit: {
      title: "Modifier l'utilisateur",
    },
    new: {
      title: 'Inviter des utilisateurs',
      titleModal: 'Nouvel Utilisateur',
      emailsHint:
        "Séparez les adresses e-mail par des virgules ',' \.",
    },
    view: {
      title: 'Voir Utilisateur',
      activity: 'Activité',
    },
    importer: {
      title: 'Importer Utilisateurs',
      fileName: "Modèle d'importation des utilisateurs",
      hint:
        'Les colonnes Fichiers / Images doivent être les URL des fichiers séparés par un espace. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        "L'utilisateur avec cet e-mail existe déjà",
      userNotFound: 'Utilisateur introuvable',
      disablingHimself: 'Vous ne pouvez pas désactiver',
      revokingOwnPermission:
        "Vous ne pouvez pas révoquer votre propre autorisation d'administrateur",
    },
  },
  plan: {
    menu: 'Plans',
    title: 'Plans',
    free: {
      label: 'Gratuit',
      price: '$0',
    },
    growth: {
      label: 'Croissance',
      price: '$10',
    },
    enterprise: {
      label: 'Entreprise',
      price: '$50',
    },
    pricingPeriod: '/mois',
    current: 'Plan actuel',
    subscribe: 'Souscrire',
    manage: "Gérer l'abonnement",
    cancelAtPeriodEnd:
      'Ce plan sera annulé à la fin de la période.',
    somethingWrong:
      "Il y a un problème avec votre abonnement.Accédez à la gestion de l'abonnement pour plus de détails.",
    notPlanUser:
      "Vous n'êtes pas l'administrateur de cet abonnement.",
    demoHintHtml:
      'Astuce: utilisez ces <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">Cartes de Test</a> pour la démo.',
  },
  auditLog: {
    menu: 'Audit logs',
    title: 'Audit logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Séparez les entités par une virgule.',
    fields: {
      id: 'Id',
      timestampRange: 'Période',
      entityName: 'Entité',
      entityNames: 'Entités',
      entityId: "ID d'entité",
      action: 'Action',
      values: 'Valeurs',
      timestamp: 'Date',
      createdByEmail: "E-mail de l'utilisateur",
    },
  },
  settings: {
    title: 'Paramétres',
    menu: 'Paramétres',
    save: {
      success:
        'Configuration enregistrée avec succès. La page se rechargera dans {0} secondes pour que les modifications prennent effet.',
    },
    fields: {
      theme: 'Sujet',
      primaryColor: 'Couleur primaire',
      secondaryColor: 'Couleur secondaire',
      logos: 'Logo',
      backgroundImages: 'Image de fond',
    },
    colors: {
      default: 'Défaut',
      amber: 'Ambre',
      blue: 'bleu',
      cyan: 'Cyan',
      deep_orange: 'Orange intense',
      deep_purple: 'Violet foncé',
      green: 'Vert',
      indigo: 'Indigo',
      light_blue: 'Bleu clair',
      light_green: 'Vert clair',
      lime: 'Citron vert',
      orange: 'Orangé',
      pink: 'Rose',
      purple: 'Violet',
      red: 'Rouge',
      teal: 'Vert bleuâtre',
      yellow: 'Jaune',
      grey: 'Gris',
      blue_grey: 'Gris bleuté',
      brown: 'Marron',
    },
  },
  dashboard: {
    // empty dasbord translate plz //
    chart: {
      title : "Mon graphique", 
      content :"Aucune donnée à afficher pour la période sélectionnée",
     },
    // 
    menu: 'Tableau de bord',
    message:
      'Cette page utilise de fausses données à des fins de démonstration uniquement. Vous pouvez le modifier dans frontend/src/app/dashboard/components/dashboard.component.html',
    charts: {
      day: 'Jour',
      red: 'Rouge',
      green: 'Vert',
      yellow: 'Jaune',
      grey: 'Gris',
      blue: 'Bleu',
      orange: 'Orangé',
      months: {
        '1': 'Janvier',
        '2': 'Février',
        '3': 'Mars',
        '4': 'Avril',
        '5': 'Mai',
        '6': 'Juin',
        '7': 'Juillet',
        '8': 'Août',
        '9': 'Septembre',
        '10': 'Octobre',
        '11': 'Novembre',
        '12': 'Décembre',
      },
      eating: 'En mangeant',
      drinking: 'En buvant',
      sleeping: 'En train de dormir',
      designing: 'Conception',
      coding: 'Codage',
      cycling: 'Cyclisme',
      running: 'Fonctionnement',
      customer: 'Client',
    },

    text : {
      region : 'Statistique des témoignages par Région', 
      assign :'Statistique des témoignages par membre',
      anonymous : 'Statistique des témoignages par Anonyme',
      partenar :'Statistique des témoignages par Partenaire',
      status : 'Statistique des témoignages par Statut',
      category :'Statistique des témoignages par Catégorie',
    }, 
    status :{
      open : 'En cours', 
      closed:'Fermé',
      waitting:'En attente',
      canceled:'Annulé',
    },
     priority: {
      'low': 'Faible',
      'medium': 'Moyenne',
      'hight': 'Haute',
    
    },
    assign:{ 
      'save' : 'Attribuer cette tâche pour moi ',
      'view' :'Cliquez pour afficher plus de détails sur cette tâche', 

      'cancel' :'Revenir pour choisir une autre tâche', 
    }
  },
  errors: {
    '403': "Désolé, vous n'avez pas accès à cette page",
    '404': "Désolé, la page que vous avez visitée n'existe pas",
    '500': 'Désolé, le serveur signale une erreur',
    '429':
      'Trop de demandes. Veuillez réessayer plus tard.',
    backToHome: 'Revenir pour commencer',
    forbidden: {
      message: 'Interdit',
    },
    validation: {
      message: "Une erreur s'est produite",
    },
    defaultErrorMessage: "Ops, une erreur s'est produite",
  },
  /* eslint-disable */
  validation: {
    mixed: {
      default: "${path} n'est pas valide",
      required: '${path} est obligatoire',
      oneOf:
        "${path} doit être l'une des valeurs suivantes: ${values}",
      notOneOf:
        "${path} no doit être l'une des valeurs suivantes: ${values}",
      // notType: ({ path, type, value, originalValue }) => {
      //   return `${path} Doit être un ${type}`;
      // },
    },
    string: {
      length:
        '${path} doit avoir exactement ${length} caractères',
      min: '${path} doit avoir au moins ${min} caractères',
      max:
        '${path} doit avoir au plus ${max} caractères',
      matches:
        '${path} doit correspondre à ce qui suit: "${regex}"',
      email:
        '${path} doit être un email valide',
      url: '${path} doit être une URL valide',
      trim: '${path} doit être une chaîne coupée',
      lowercase:
        '${path} doit être une chaîne en minuscules',
      uppercase: '${path} doit être une chaîne en majuscules',
      selected: '${path} doit être sélectionné',
    },
    number: {
      min: '${path} doit être supérieur ou égal à ${min}',
      max: '${path} doit être inférieur ou égal à ${max}',
      lessThan: '${path} doit être inférieur à ${less}',
      moreThan: '${path} doit être supérieur à ${more}',
      notEqual: '${path} ne doit pas être égal à ${notEqual}',
      positive: '${path} Doit être un nombre positif',
      negative: '${path} Doit être un nombre négatif',
      integer: '${path} doit être un nombre entier',
    },
    date: {
      min: 'La campagne ${path} doit être après ${min}',
      max: 'La campagne ${path} doit être Ancien a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        "La campagne ${path} ne peut pas avoir de clés non spécifiées dans la forme de l'objet",
    },
    array: {
      min:
        'La campagne ${path} doit avoir au moins ${min} éléments',
      max:
        'La campagne ${path} doit avoir des éléments inférieurs ou égaux à ${max}',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Uploader',
    image: 'Vous devez télécharger une image',
    size:
      'Le fichier est très volumineux. La taille maximale autorisée est {0}',
    formats: "Format invalide. Il doit être l'un des: {0}.",
  },
  importer: {
    line: 'Ligne',
    status: 'Statut',
    pending: 'En attente',
    imported: 'Importé',
    error: 'Erreur',
    total: '{0} importé, {1} en attente et {2} avec erreur',
    importedMessage: 'Traité {0} de {1}.',
    noNavigateAwayMessage:
      "Veuillez ne pas quitter cette page ou l'importation s'arrêtera.",
    completed: {
      success:
        'Importation terminée. Toutes les lignes ont été importées avec succès.',
      someErrors:
        "Traitement terminé, mais certaines lignes n'ont pas pu être importées.",
      allErrors:
        "L'importation a échoué. Il n'y a pas de lignes valides.",
    },
    form: {
      downloadTemplate: 'Téléchargez le modèle',
      hint:
        'Cliquez ou faites glisser le fichier dans cette zone pour continuer.',
    },
    list: {
      discardConfirm:
        'Vous êtes sûr? Les données non importées seront perdues.',
    },
    errors: {
      invalidFileEmpty: 'Le fichier est vide',
      invalidFileExcel:
        'Seuls les fichiers Excel (.Xlsx) sont autorisés',
      invalidFileUpload:
        'Fichier non valide. Assurez-vous que vous utilisez la dernière version du template.',
      importHashRequired: 'Importer le hachage requis',
      importHashExistent:
        'Les données ont déjà été importées',
    },
  },
  paginator: {
    itemsPerPageLabel: 'Objets par page:',
    nextPageLabel: 'Page suivante',
    previousPageLabel: 'Page précédente ',
    firstPageLabel: 'Première page',
    lastPageLabel: 'Dernière page',
    getRangeLabel: {
      zero: '0 de {0}',
      interval: '{0} - {1} de {2}',
    },
  },
  datetime: {
    upSecondLabel: 'Ajouter une seconde',
    downSecondLabel: 'Moins une seconde',
    upMinuteLabel: 'Ajouter une minute',
    downMinuteLabel: 'Moins une minute',
    upHourLabel: 'Ajouter une heure',
    downHourLabel: 'Moins une heure',
    prevMonthLabel: 'le mois précédent',
    nextMonthLabel: 'Mois suivant',
    prevYearLabel: "L'année précédente ",
    nextYearLabel: "L'année prochaine",
    prevMultiYearLabel: '21 années précédentes',
    nextMultiYearLabel: '21 prochaines années',
    switchToMonthViewLabel: 'Passer à la vue mensuelle',
    switchToMultiYearViewLabel: "Choisissez le mois et l'année",
    cancelBtnLabel: 'Annuler',
    setBtnLabel: 'Ensemble',
    rangeFromLabel: 'De',
    rangeToLabel: 'A',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },
  table: {
    noData: 'Aucune donnée',
    loading: 'Chargement...',
  },
  autocomplete: {
    loading: 'Chargement...',
  },
  imagesViewer: {
    noImage: 'Sans image',
  },

  menu:{
    administration : 'Administration',
    informations : 'Informations',
    help:'Aide',
    assistance:'Assistance',
    testimony : 'Témoinages', 
    common : 'Partenaires',

  },
};

export default es;
