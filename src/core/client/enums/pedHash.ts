// https://wiki.rage.mp/index.php?title=Peds
export const enum PedHash {
    a_c_boar = 0xce5ff074,
    a_c_cat_01 = 0x573201b8,
    a_c_chickenhawk = 0xaab71f62,
    a_c_chimp = 0xa8683715,
    a_c_chop = 0x14ec17ea,
    a_c_cormorant = 0x56e29962,
    a_c_cow = 0xfcfa9e1e,
    a_c_coyote = 0x644ac75e,
    a_c_crow = 0x18012a9f,
    a_c_deer = 0xd86b5a95,
    a_c_dolphin = 0x8bbab455,
    a_c_fish = 0x2fd800b7,
    a_c_hen = 0x6af51faf,
    a_c_humpback = 0x471be4b2,
    a_c_husky = 0x4e8f95a2,
    a_c_killerwhale = 0x8d8ac8b9,
    a_c_mtlion = 0x1250d7ba,
    a_c_pig = 0xb11bab56,
    a_c_pigeon = 0x06a20728,
    a_c_poodle = 0x431d501c,
    a_c_pug = 0x6d362854,
    a_c_rabbit_01 = 0xdfb55c81,
    a_c_rat = 0xc3b52966,
    a_c_retriever = 0x349f33e1,
    a_c_rhesus = 0xc2d06f53,
    a_c_rottweiler = 0x9563221d,
    a_c_seagull = 0xd3939dfd,
    a_c_sharkhammer = 0x3c831724,
    a_c_sharktiger = 0x06c3f072,
    a_c_shepherd = 0x431fc24c,
    a_c_stingray = 0xa148614d,
    a_c_westy = 0xad7844bb,
    a_f_m_beach_01 = 0x303638a7,
    a_f_m_bevhills_01 = 0xbe086efd,
    a_f_m_bevhills_02 = 0xa039335f,
    a_f_m_bodybuild_01 = 0x3bd99114,
    a_f_m_business_02 = 0x1fc37dbc,
    a_f_m_downtown_01 = 0x654ad86e,
    a_f_m_eastsa_01 = 0x9d3dcb7a,
    a_f_m_eastsa_02 = 0x63c8d891,
    a_f_m_fatbla_01 = 0xfab48bcb,
    a_f_m_fatcult_01 = 0xb5cf80e4,
    a_f_m_fatwhite_01 = 0x38bad33b,
    a_f_m_ktown_01 = 0x52c824de,
    a_f_m_ktown_02 = 0x41018151,
    a_f_m_prolhost_01 = 0x169bd1e1,
    a_f_m_salton_01 = 0xde0e0969,
    a_f_m_skidrow_01 = 0xb097523b,
    a_f_m_soucent_01 = 0x745855a1,
    a_f_m_soucent_02 = 0xf322d338,
    a_f_m_soucentmc_01 = 0xcde955d2,
    a_f_m_tourist_01 = 0x505603b9,
    a_f_m_tramp_01 = 0x48f96f5b,
    a_f_m_trampbeac_01 = 0x8ca0c266,
    a_f_o_genstreet_01 = 0x61c81c85,
    a_f_o_indian_01 = 0xbad7bb80,
    a_f_o_ktown_01 = 0x47cf5e96,
    a_f_o_salton_01 = 0xccff7d8a,
    a_f_o_soucent_01 = 0x3dfa1830,
    a_f_o_soucent_02 = 0xa56de716,
    a_f_y_beach_01 = 0xc79f6928,
    a_f_y_bevhills_01 = 0x445ac854,
    a_f_y_bevhills_02 = 0x5c2cf7f8,
    a_f_y_bevhills_03 = 0x20c8012f,
    a_f_y_bevhills_04 = 0x36df2d5d,
    a_f_y_business_01 = 0x2799efd8,
    a_f_y_business_02 = 0x31430342,
    a_f_y_business_03 = 0xae86fdb4,
    a_f_y_business_04 = 0xb7c61032,
    a_f_y_eastsa_01 = 0xf5b0079d,
    a_f_y_eastsa_02 = 0x0438a4ae,
    a_f_y_eastsa_03 = 0x51c03fa4,
    a_f_y_epsilon_01 = 0x689c2a80,
    a_f_y_femaleagent = 0x50610c43,
    a_f_y_fitness_01 = 0x457c64fb,
    a_f_y_fitness_02 = 0x13c4818c,
    a_f_y_genhot_01 = 0x2f4aec3e,
    a_f_y_golfer_01 = 0x7dd8fb58,
    a_f_y_hiker_01 = 0x30830813,
    a_f_y_hippie_01 = 0x1475b827,
    a_f_y_hipster_01 = 0x8247d331,
    a_f_y_hipster_02 = 0x97f5fe8d,
    a_f_y_hipster_03 = 0xa5ba9a16,
    a_f_y_hipster_04 = 0x199881dc,
    a_f_y_indian_01 = 0x092d9cc1,
    a_f_y_juggalo_01 = 0xdb134533,
    a_f_y_runner_01 = 0xc7496729,
    a_f_y_rurmeth_01 = 0x3f789426,
    a_f_y_scdressy_01 = 0xdb5ec400,
    a_f_y_skater_01 = 0x695fe666,
    a_f_y_soucent_01 = 0x2c641d7a,
    a_f_y_soucent_02 = 0x5a8ef9cf,
    a_f_y_soucent_03 = 0x87b25415,
    a_f_y_tennis_01 = 0x550c79c6,
    a_f_y_topless_01 = 0x9cf26183,
    a_f_y_tourist_01 = 0x563b8570,
    a_f_y_tourist_02 = 0x9123fb40,
    a_f_y_vinewood_01 = 0x19f41f65,
    a_f_y_vinewood_02 = 0xdab6a0eb,
    a_f_y_vinewood_03 = 0x379ddab8,
    a_f_y_vinewood_04 = 0xfae46146,
    a_f_y_yoga_01 = 0xc41b062e,
    a_m_m_acult_01 = 0x5442c66b,
    a_m_m_afriamer_01 = 0xd172497e,
    a_m_m_beach_01 = 0x403db4fd,
    a_m_m_beach_02 = 0x787fa588,
    a_m_m_bevhills_01 = 0x54dbee1f,
    a_m_m_bevhills_02 = 0x3fb5c3d3,
    a_m_m_business_01 = 0x7e6a64b7,
    a_m_m_eastsa_01 = 0xf9a6f53f,
    a_m_m_eastsa_02 = 0x07dd91ac,
    a_m_m_farmer_01 = 0x94562dd7,
    a_m_m_fatlatin_01 = 0x61d201b3,
    a_m_m_genfat_01 = 0x06dd569f,
    a_m_m_genfat_02 = 0x13aef042,
    a_m_m_golfer_01 = 0xa9eb0e42,
    a_m_m_hasjew_01 = 0x6bd9b68c,
    a_m_m_hillbilly_01 = 0x6c9b2849,
    a_m_m_hillbilly_02 = 0x7b0e452f,
    a_m_m_indian_01 = 0xddcaaa2c,
    a_m_m_ktown_01 = 0xd15d7e71,
    a_m_m_malibu_01 = 0x2fde6eb7,
    a_m_m_mexcntry_01 = 0xdd817ead,
    a_m_m_mexlabor_01 = 0xb25d16b2,
    a_m_m_og_boss_01 = 0x681bd012,
    a_m_m_paparazzi_01 = 0xecca8c15,
    a_m_m_polynesian_01 = 0xa9d9b69e,
    a_m_m_prolhost_01 = 0x9712c38f,
    a_m_m_rurmeth_01 = 0x3bad4184,
    a_m_m_salton_01 = 0x4f2e038a,
    a_m_m_salton_02 = 0x60f4a717,
    a_m_m_salton_03 = 0xb28c4a45,
    a_m_m_salton_04 = 0x964511b7,
    a_m_m_skater_01 = 0xd9d7588c,
    a_m_m_skidrow_01 = 0x01eea6bd,
    a_m_m_socenlat_01 = 0x0b8d69e3,
    a_m_m_soucent_01 = 0x6857c9b7,
    a_m_m_soucent_02 = 0x9f6d37e1,
    a_m_m_soucent_03 = 0x8bd990ba,
    a_m_m_soucent_04 = 0xc2fbfefe,
    a_m_m_stlat_02 = 0xc2a87702,
    a_m_m_tennis_01 = 0x546a5344,
    a_m_m_tourist_01 = 0xc89f0184,
    a_m_m_tramp_01 = 0x1ec93fd0,
    a_m_m_trampbeac_01 = 0x53b57eb0,
    a_m_m_tranvest_01 = 0xe0e69974,
    a_m_m_tranvest_02 = 0xf70ec5c4,
    a_m_o_acult_01 = 0x55446010,
    a_m_o_acult_02 = 0x4ba14cca,
    a_m_o_beach_01 = 0x8427d398,
    a_m_o_genstreet_01 = 0xad54e7a8,
    a_m_o_ktown_01 = 0x1536d95a,
    a_m_o_salton_01 = 0x20208e4d,
    a_m_o_soucent_01 = 0x2ad8921b,
    a_m_o_soucent_02 = 0x4086bd77,
    a_m_o_soucent_03 = 0x0e32d8d0,
    a_m_o_tramp_01 = 0x174d4245,
    a_m_y_acult_01 = 0xb564882b,
    a_m_y_acult_02 = 0x80e59f2e,
    a_m_y_beach_01 = 0xd1feb884,
    a_m_y_beach_02 = 0x23c7dc11,
    a_m_y_beach_03 = 0xe7a963d9,
    a_m_y_beachvesp_01 = 0x7e0961b8,
    a_m_y_beachvesp_02 = 0xca56fa52,
    a_m_y_bevhills_01 = 0x76284640,
    a_m_y_bevhills_02 = 0x668ba707,
    a_m_y_breakdance_01 = 0x379f9596,
    a_m_y_busicas_01 = 0x9ad32fe9,
    a_m_y_business_01 = 0xc99f21c4,
    a_m_y_business_02 = 0xb3b3f5e6,
    a_m_y_business_03 = 0xa1435105,
    a_m_y_cyclist_01 = 0xfdc653c7,
    a_m_y_dhill_01 = 0xff3e88ab,
    a_m_y_downtown_01 = 0x2dadf4aa,
    a_m_y_eastsa_01 = 0xa4471173,
    a_m_y_eastsa_02 = 0x168775f6,
    a_m_y_epsilon_01 = 0x77d41a3e,
    a_m_y_epsilon_02 = 0xaa82ff9b,
    a_m_y_gay_01 = 0xd1cce036,
    a_m_y_gay_02 = 0xa5720781,
    a_m_y_genstreet_01 = 0x9877ef71,
    a_m_y_genstreet_02 = 0x3521a8d2,
    a_m_y_golfer_01 = 0xd71fe131,
    a_m_y_hasjew_01 = 0xe16d8f01,
    a_m_y_hiker_01 = 0x50f73c0c,
    a_m_y_hippy_01 = 0x7d03e617,
    a_m_y_hipster_01 = 0x2307a353,
    a_m_y_hipster_02 = 0x14d506ee,
    a_m_y_hipster_03 = 0x4e4179c6,
    a_m_y_indian_01 = 0x2a22fbce,
    a_m_y_jetski_01 = 0x2db7eef3,
    a_m_y_juggalo_01 = 0x91ca3e2c,
    a_m_y_ktown_01 = 0x1af6542c,
    a_m_y_ktown_02 = 0x297ff13f,
    a_m_y_latino_01 = 0x132c1a8e,
    a_m_y_methhead_01 = 0x696be0a9,
    a_m_y_mexthug_01 = 0x3053e555,
    a_m_y_motox_01 = 0x64fdea7d,
    a_m_y_motox_02 = 0x77ac8fda,
    a_m_y_musclbeac_01 = 0x4b652906,
    a_m_y_musclbeac_02 = 0xc923247c,
    a_m_y_polynesian_01 = 0x8384fc9f,
    a_m_y_roadcyc_01 = 0xf561a4c6,
    a_m_y_runner_01 = 0x25305eee,
    a_m_y_runner_02 = 0x843d9d0f,
    a_m_y_salton_01 = 0xd7606c30,
    a_m_y_skater_01 = 0xc1c46677,
    a_m_y_skater_02 = 0xaffac2e4,
    a_m_y_soucent_01 = 0xe716bdcb,
    a_m_y_soucent_02 = 0xaca3c8ca,
    a_m_y_soucent_03 = 0xc3f0f764,
    a_m_y_soucent_04 = 0x8a3703f1,
    a_m_y_stbla_01 = 0xcf92ade9,
    a_m_y_stbla_02 = 0x98c7404f,
    a_m_y_stlat_01 = 0x8674d5fc,
    a_m_y_stwhi_01 = 0x2418c430,
    a_m_y_stwhi_02 = 0x36c6e98c,
    a_m_y_sunbathe_01 = 0xb7292f0c,
    a_m_y_surfer_01 = 0xeac2c7ee,
    a_m_y_vindouche_01 = 0xc19377e7,
    a_m_y_vinewood_01 = 0x4b64199d,
    a_m_y_vinewood_02 = 0x5d15bd00,
    a_m_y_vinewood_03 = 0x1fdf4294,
    a_m_y_vinewood_04 = 0x31c9e669,
    a_m_y_yoga_01 = 0xab0a7155,
    cs_amandatownley = 0x95ef18e3,
    cs_andreas = 0xe7565327,
    cs_ashley = 0x26c3d079,
    cs_bankman = 0x9760192e,
    cs_barry = 0x69591cf7,
    cs_beverly = 0xb46ec356,
    cs_brad = 0xefe5afe6,
    cs_bradcadaver = 0x7228af60,
    cs_carbuyer = 0x8cce790f,
    cs_casey = 0xea969c40,
    cs_chengsr = 0x30db9d7b,
    cs_chrisformage = 0xc1f380e6,
    cs_clay = 0xdbcb9834,
    cs_dale = 0x0ce81655,
    cs_davenorton = 0x8587248c,
    cs_debra = 0xecd04fe9,
    cs_denise = 0x6f802738,
    cs_devin = 0x2f016d02,
    cs_dom = 0x4772af42,
    cs_dreyfuss = 0x3c60a153,
    cs_drfriedlander = 0xa3a35c2f,
    cs_fabien = 0x47035ec1,
    cs_fbisuit_01 = 0x585c0b52,
    cs_floyd = 0x062547e7,
    cs_guadalope = 0x0f9513f1,
    cs_gurk = 0xc314f727,
    cs_hunter = 0x5b44892c,
    cs_janet = 0x3034f9e2,
    cs_jewelass = 0x4440a804,
    cs_jimmyboston = 0x039677bd,
    cs_jimmydisanto = 0xb8cc92b4,
    cs_joeminuteman = 0xf09d5e29,
    cs_johnnyklebitz = 0xfa8ab881,
    cs_josef = 0x459762ca,
    cs_josh = 0x450eef9d,
    cs_karen_daniels = 0x4baf381c,
    cs_lamardavis = 0x45463a0d,
    cs_lazlow = 0x38951a1b,
    cs_lestercrest = 0xb594f5c3,
    cs_lifeinvad_01 = 0x72551375,
    cs_magenta = 0x5816c61a,
    cs_manuel = 0xfbb374ca,
    cs_marnie = 0x574de134,
    cs_martinmadrazo = 0x43595670,
    cs_maryann = 0x0998c7ad,
    cs_michelle = 0x70aeb9c8,
    cs_milton = 0xb76a330f,
    cs_molly = 0x45918e44,
    cs_movpremf_01 = 0x4bba84d9,
    cs_movpremmale = 0x8d67ee7d,
    cs_mrk = 0xc3cc9a75,
    cs_mrs_thornhill = 0x4f921e6e,
    cs_mrsphillips = 0xcbfda3cf,
    cs_natalia = 0x4efeb1f0,
    cs_nervousron = 0x7896da94,
    cs_nigel = 0xe1479c0b,
    cs_old_man1a = 0x1eec7bdc,
    cs_old_man2 = 0x98f9e770,
    cs_omega = 0x8b70b405,
    cs_orleans = 0xad340f5a,
    cs_paper = 0x6b38b8f8,
    cs_patricia = 0xdf8b1301,
    cs_priest = 0x4d6de57e,
    cs_prolsec_02 = 0x1e9314a2,
    cs_russiandrunk = 0x46521a32,
    cs_siemonyetarian = 0xc0937202,
    cs_solomon = 0xf6d1e04e,
    cs_stevehains = 0xa4e0a1fe,
    cs_stretch = 0x893d6805,
    cs_tanisha = 0x42fe5370,
    cs_taocheng = 0x8864083d,
    cs_taostranslator = 0x53536529,
    cs_tenniscoach = 0x5c26040a,
    cs_terry = 0x3a5201c5,
    cs_tom = 0x69e8abc3,
    cs_tomepsilon = 0x8c0fd4e2,
    cs_tracydisanto = 0x0609b130,
    cs_wade = 0xd266d9d6,
    cs_zimbor = 0xeaacaaf0,
    csb_abigail = 0x89768941,
    csb_agent = 0xd770c9b4,
    csb_anita = 0x0703f106,
    csb_anton = 0xa5c787b6,
    csb_ballasog = 0xabef0004,
    csb_bride = 0x82bf7ea1,
    csb_burgerdrug = 0x8cdcc057,
    csb_car3guy1 = 0x04430687,
    csb_car3guy2 = 0x1383a508,
    csb_chef = 0xa347ca8a,
    csb_chef2 = 0xae5be23a,
    csb_chin_goon = 0xa8c22996,
    csb_cletus = 0xcae9e5d5,
    csb_cop = 0x9ab35f63,
    csb_customer = 0xa44f6f8b,
    csb_denise_friend = 0xb58d2529,
    csb_fos_rep = 0x1bcc157b,
    csb_g = 0xa28e71d7,
    csb_groom = 0x7aab19d2,
    csb_grove_str_dlr = 0xe8594e22,
    csb_hao = 0xec9e8f1c,
    csb_hugh = 0x6f139b54,
    csb_imran = 0xe3420bdb,
    csb_jackhowitzer = 0x44bc7bb1,
    csb_janitor = 0xc2005a40,
    csb_maude = 0xbcc475cb,
    csb_money = 0x989dfd9a,
    csb_mp_agent14 = 0x6dbbfc8b,
    csb_mweather = 0x613e626c,
    csb_ortega = 0xc0db04cf,
    csb_oscar = 0xf41f399b,
    csb_paige = 0x5b1fa0c3,
    csb_popov = 0x617d89e2,
    csb_porndudes = 0x2f4afe35,
    csb_prologuedriver = 0xf00b49db,
    csb_prolsec = 0x7fa2f024,
    csb_ramp_gang = 0xc2800dbe,
    csb_ramp_hic = 0x858c94b8,
    csb_ramp_hipster = 0x21f58bb4,
    csb_ramp_marine = 0x616c97b9,
    csb_ramp_mex = 0xf64ed7d0,
    csb_rashcosvki = 0x188099a9,
    csb_reporter = 0x2e420a24,
    csb_roccopelosi = 0xaa64168c,
    csb_screen_writer = 0x8be12cec,
    csb_stripper_01 = 0xaeea76b5,
    csb_stripper_02 = 0x81441b71,
    csb_tonya = 0x6343dd19,
    csb_trafficwarden = 0xde2937f3,
    csb_undercover = 0xef785a6a,
    csb_vagspeak = 0x48ff4ca9,
    g_f_importexport_01 = 0x84a1b11a,
    g_f_y_ballas_01 = 0x158c439c,
    g_f_y_families_01 = 0x4e0ce5d3,
    g_f_y_lost_01 = 0xfd5537de,
    g_f_y_vagos_01 = 0x5aa42c21,
    g_m_importexport_01 = 0xbca2ccea,
    g_m_m_armboss_01 = 0xf1e823a2,
    g_m_m_armgoon_01 = 0xfda94268,
    g_m_m_armlieut_01 = 0xe7714013,
    g_m_m_chemwork_01 = 0xf6157d8f,
    g_m_m_chiboss_01 = 0xb9dd0300,
    g_m_m_chicold_01 = 0x106d9a99,
    g_m_m_chigoon_01 = 0x7e4f763f,
    g_m_m_chigoon_02 = 0xff71f826,
    g_m_m_korboss_01 = 0x352a026f,
    g_m_m_mexboss_01 = 0x5761f4ad,
    g_m_m_mexboss_02 = 0x4914d813,
    g_m_y_armgoon_02 = 0xc54e878a,
    g_m_y_azteca_01 = 0x68709618,
    g_m_y_ballaeast_01 = 0xf42ee883,
    g_m_y_ballaorig_01 = 0x231af63f,
    g_m_y_ballasout_01 = 0x23b88069,
    g_m_y_famca_01 = 0xe83b93b7,
    g_m_y_famdnf_01 = 0xdb729238,
    g_m_y_famfor_01 = 0x84302b09,
    g_m_y_korean_01 = 0x247502a9,
    g_m_y_korean_02 = 0x8fedd989,
    g_m_y_korlieut_01 = 0x7ccbe17a,
    g_m_y_lost_01 = 0x4f46d607,
    g_m_y_lost_02 = 0x3d843282,
    g_m_y_lost_03 = 0x32b11cdc,
    g_m_y_mexgang_01 = 0xbddd5546,
    g_m_y_mexgoon_01 = 0x26ef3426,
    g_m_y_mexgoon_02 = 0x31a3498e,
    g_m_y_mexgoon_03 = 0x964d12dc,
    g_m_y_pologoon_01 = 0x4f3fba06,
    g_m_y_pologoon_02 = 0xa2e86156,
    g_m_y_salvaboss_01 = 0x905ce0ca,
    g_m_y_salvagoon_01 = 0x278c8cb7,
    g_m_y_salvagoon_02 = 0x3273a285,
    g_m_y_salvagoon_03 = 0x03b8c510,
    g_m_y_strpunk_01 = 0xfd1c49bb,
    g_m_y_strpunk_02 = 0x0da1eac6,
    hc_driver = 0x3b474adf,
    hc_gunman = 0x0b881aee,
    hc_hacker = 0x99bb00f8,
    ig_abigail = 0x400aec41,
    ig_agent = 0x246af208,
    ig_amandatownley = 0x6d1e15f7,
    ig_andreas = 0x47e4eea0,
    ig_ashley = 0x7ef440db,
    ig_avon = 0xfce270c2,
    ig_ballasog = 0xa70b4a92,
    ig_bankman = 0x909d9e7f,
    ig_barry = 0x2f8845a3,
    ig_benny = 0xc4b715d2,
    ig_bestmen = 0x5746cd96,
    ig_beverly = 0xbda21e5c,
    ig_brad = 0xbdbb4922,
    ig_bride = 0x6162ec47,
    ig_car3guy1 = 0x84f9e937,
    ig_car3guy2 = 0x75c34aca,
    ig_casey = 0xe0fa2554,
    ig_chef = 0x49eadbf6,
    ig_chef2 = 0x85889ac3,
    ig_chengsr = 0xaae4ea7b,
    ig_chrisformage = 0x286e54a7,
    ig_clay = 0x6ccfe08a,
    ig_claypain = 0x9d0087a8,
    ig_cletus = 0xe6631195,
    ig_dale = 0x467415e9,
    ig_davenorton = 0x15cd4c33,
    ig_denise = 0x820b33bd,
    ig_devin = 0x7461a0b0,
    ig_dom = 0x9c2db088,
    ig_dreyfuss = 0xda890932,
    ig_drfriedlander = 0xcbfc0df5,
    ig_fabien = 0xd090c350,
    ig_fbisuit_01 = 0x3ae4a33b,
    ig_floyd = 0xb1b196b2,
    ig_g = 0x841ba933,
    ig_groom = 0xfece8b85,
    ig_hao = 0x65978363,
    ig_hunter = 0xce1324de,
    ig_janet = 0x0d6d9c49,
    ig_jay_norris = 0x7a32ee74,
    ig_jewelass = 0x0f5d26bb,
    ig_jimmyboston = 0xeda0082d,
    ig_jimmydisanto = 0x570462b9,
    ig_joeminuteman = 0xbe204c9b,
    ig_johnnyklebitz = 0x87ca80ae,
    ig_josef = 0xe11a9fb4,
    ig_josh = 0x799e9eee,
    ig_karen_daniels = 0xeb51d959,
    ig_kerrymcintosh = 0x5b3bd90d,
    ig_lamardavis = 0x65b93076,
    ig_lazlow = 0xdfe443e5,
    ig_lestercrest_2 = 0x6e42fd26,
    ig_lestercrest = 0x4da6e849,
    ig_lifeinvad_01 = 0x5389a93c,
    ig_lifeinvad_02 = 0x27bd51d4,
    ig_magenta = 0xfcdc910a,
    ig_malc = 0xf1bca919,
    ig_manuel = 0xfd418e10,
    ig_marnie = 0x188232d0,
    ig_maryann = 0xa36f9806,
    ig_maude = 0x3be8287e,
    ig_michelle = 0xbf9672f4,
    ig_milton = 0xcb3059b2,
    ig_molly = 0xaf03dde1,
    ig_money = 0x37facda6,
    ig_mp_agent14 = 0xfbf98469,
    ig_mrk = 0xeddcab6d,
    ig_mrs_thornhill = 0x1e04a96b,
    ig_mrsphillips = 0x3862eea8,
    ig_natalia = 0xde17dd3b,
    ig_nervousron = 0xbd006af1,
    ig_nigel = 0xc8b7167d,
    ig_old_man1a = 0x719d27f4,
    ig_old_man2 = 0xef154c47,
    ig_omega = 0x60e6a7d8,
    ig_oneil = 0x2dc6d3e7,
    ig_orleans = 0x61d4c771,
    ig_ortega = 0x26a562b7,
    ig_paige = 0x154fcf3f,
    ig_paper = 0x999b00c6,
    ig_patricia = 0xc56e118c,
    ig_popov = 0x267630fe,
    ig_priest = 0x6437e77d,
    ig_prolsec_02 = 0x27b3ad75,
    ig_ramp_gang = 0xe52e126c,
    ig_ramp_hic = 0x45753032,
    ig_ramp_hipster = 0xdeef9f6e,
    ig_ramp_mex = 0xe6ac74a4,
    ig_rashcosvki = 0x380c4de6,
    ig_roccopelosi = 0xd5ba52ff,
    ig_russiandrunk = 0x3d0a5eb1,
    ig_screen_writer = 0xffe63677,
    ig_siemonyetarian = 0x4c7b2f05,
    ig_solomon = 0x86bdfe26,
    ig_stevehains = 0x382121c8,
    ig_stretch = 0x36984358,
    ig_talina = 0xe793c8e8,
    ig_tanisha = 0x0d810489,
    ig_taocheng = 0xdc5c5ea5,
    ig_taostranslator = 0x7c851464,
    ig_tenniscoach = 0xa23b5f57,
    ig_terry = 0x67000b94,
    ig_tomepsilon = 0xcd777aaa,
    ig_tonya = 0xcac85344,
    ig_tracydisanto = 0xde352a35,
    ig_trafficwarden = 0x5719786d,
    ig_tylerdix = 0x5265f707,
    ig_vagspeak = 0xf9fd068c,
    ig_wade = 0x92991b72,
    ig_zimbor = 0x0b34d6f5,
    mp_f_boatstaff_01 = 0x3293b9ce,
    mp_f_cardesign_01 = 0x242c34a7,
    mp_f_chbar_01 = 0xc3f6e385,
    mp_f_cocaine_01 = 0x4b657af8,
    mp_f_counterfeit_01 = 0xb788f1f5,
    mp_f_deadhooker = 0x73dea88b,
    mp_f_execpa_01 = 0x432ca064,
    mp_f_execpa_02 = 0x5972ccf0,
    mp_f_forgery_01 = 0x781a3cf8,
    mp_f_freemode_01 = 0x9c9effd8,
    mp_f_helistaff_01 = 0x19b6ff06,
    mp_f_meth_01 = 0xd2b27ec1,
    mp_f_misty_01 = 0xd128ff9d,
    mp_f_stripperlite = 0x2970a494,
    mp_f_weed_01 = 0xb26573a3,
    mp_g_m_pros_01 = 0x6c9dd7c9,
    mp_m_avongoon = 0x9c13cb95,
    mp_m_boatstaff_01 = 0xc85f0a88,
    mp_m_bogdangoon = 0x4d5696f7,
    mp_m_claude_01 = 0xc0f371b7,
    mp_m_cocaine_01 = 0x56d38f95,
    mp_m_counterfeit_01 = 0x9855c974,
    mp_m_exarmy_01 = 0x45348dbb,
    mp_m_execpa_01 = 0x3e8417bc,
    mp_m_famdd_01 = 0x33a464e5,
    mp_m_fibsec_01 = 0x5cdef405,
    mp_m_forgery_01 = 0x613e709b,
    mp_m_freemode_01 = 0x705e61f2,
    mp_m_g_vagfun_01 = 0xc4a617bd,
    mp_m_marston_01 = 0x38430167,
    mp_m_meth_01 = 0xedb42f3f,
    mp_m_niko_01 = 0xeedacfc9,
    mp_m_securoguard_01 = 0xda2c984e,
    mp_m_shopkeep_01 = 0x18ce57d0,
    mp_m_waremech_01 = 0xf7a74139,
    mp_m_weapexp_01 = 0x36ea5b09,
    mp_m_weapwork_01 = 0x4186506e,
    mp_m_weed_01 = 0x917ed459,
    mp_s_m_armoured_01 = 0xcdef5408,
    player_one = 0x9b22dbaf,
    player_two = 0x9b810fa2,
    player_zero = 0x0d7114c9,
    s_f_m_fembarber = 0x163b875b,
    s_f_m_maid_01 = 0xe093c5c6,
    s_f_m_shop_high = 0xae47e4b0,
    s_f_m_sweatshop_01 = 0x312b5bc0,
    s_f_y_airhostess_01 = 0x5d71a46f,
    s_f_y_bartender_01 = 0x780c01bd,
    s_f_y_baywatch_01 = 0x4a8e5536,
    s_f_y_cop_01 = 0x15f8700d,
    s_f_y_factory_01 = 0x69f46bf3,
    s_f_y_hooker_01 = 0x028abf95,
    s_f_y_hooker_02 = 0x14c3e407,
    s_f_y_hooker_03 = 0x031640ac,
    s_f_y_migrant_01 = 0xd55b2bf5,
    s_f_y_movprem_01 = 0x2300c816,
    s_f_y_ranger_01 = 0x9fc7f637,
    s_f_y_scrubs_01 = 0xab594ab6,
    s_f_y_sheriff_01 = 0x4161d042,
    s_f_y_shop_low = 0xa96e2604,
    s_f_y_shop_mid = 0x3eecba5d,
    s_f_y_stripper_01 = 0x52580019,
    s_f_y_stripper_02 = 0x6e0fb794,
    s_f_y_stripperlite = 0x5c14edfa,
    s_f_y_sweatshop_01 = 0x8502b6b2,
    s_m_m_ammucountry = 0x0de9a30a,
    s_m_m_armoured_01 = 0x95c76ecd,
    s_m_m_armoured_02 = 0x63858a4a,
    s_m_m_autoshop_01 = 0x040eabe3,
    s_m_m_autoshop_02 = 0xf06b849d,
    s_m_m_bouncer_01 = 0x9fd4292d,
    s_m_m_ccrew_01 = 0xc9e5f56b,
    s_m_m_chemsec_01 = 0x2efeafd5,
    s_m_m_ciasec_01 = 0x625d6958,
    s_m_m_cntrybar_01 = 0x1a021b83,
    s_m_m_dockwork_01 = 0x14d7b4e0,
    s_m_m_doctor_01 = 0xd47303ac,
    s_m_m_fiboffice_01 = 0xedbc7546,
    s_m_m_fiboffice_02 = 0x26f067ad,
    s_m_m_fibsec_01 = 0x7b8b434b,
    s_m_m_gaffer_01 = 0xa956bd9e,
    s_m_m_gardener_01 = 0x49ea5685,
    s_m_m_gentransport = 0x1880ed06,
    s_m_m_hairdress_01 = 0x418dff92,
    s_m_m_highsec_01 = 0xf161d212,
    s_m_m_highsec_02 = 0x2930c1ab,
    s_m_m_janitor = 0xa96bd9ec,
    s_m_m_lathandy_01 = 0x9e80d2ce,
    s_m_m_lifeinvad_01 = 0xde0077fd,
    s_m_m_linecook = 0xdb9c0997,
    s_m_m_lsmetro_01 = 0x765aaae4,
    s_m_m_mariachi_01 = 0x7ea4ffa6,
    s_m_m_marine_01 = 0xf2daa2ed,
    s_m_m_marine_02 = 0xf0259d83,
    s_m_m_migrant_01 = 0xed0ce4c6,
    s_m_m_movalien_01 = 0x64611296,
    s_m_m_movprem_01 = 0xd85e6d28,
    s_m_m_movspace_01 = 0xe7b31432,
    s_m_m_paramedic_01 = 0xb353629e,
    s_m_m_pilot_01 = 0xe75b4b1c,
    s_m_m_pilot_02 = 0xf63de8e1,
    s_m_m_postal_01 = 0x62599034,
    s_m_m_postal_02 = 0x7367324f,
    s_m_m_prisguard_01 = 0x56c96fc6,
    s_m_m_scientist_01 = 0x4117d39b,
    s_m_m_security_01 = 0xd768b228,
    s_m_m_snowcop_01 = 0x1ae8bb58,
    s_m_m_strperf_01 = 0x795ac7a8,
    s_m_m_strpreach_01 = 0x1c0077fb,
    s_m_m_strvend_01 = 0xce9113a9,
    s_m_m_trucker_01 = 0x59511a6c,
    s_m_m_ups_01 = 0x9fc37f22,
    s_m_m_ups_02 = 0xd0bde116,
    s_m_o_busker_01 = 0xad9ef1bb,
    s_m_y_airworker = 0x62018559,
    s_m_y_ammucity_01 = 0x9e08633d,
    s_m_y_armymech_01 = 0x62cc28e2,
    s_m_y_autopsy_01 = 0xb2273d4e,
    s_m_y_barman_01 = 0xe5a11106,
    s_m_y_baywatch_01 = 0x0b4a6862,
    s_m_y_blackops_01 = 0xb3f3ee34,
    s_m_y_blackops_02 = 0x7a05fa59,
    s_m_y_blackops_03 = 0x5076a73b,
    s_m_y_busboy_01 = 0xd8f9cd47,
    s_m_y_chef_01 = 0x0f977ceb,
    s_m_y_clown_01 = 0x04498dde,
    s_m_y_construct_01 = 0xd7da9e99,
    s_m_y_construct_02 = 0xc5fefade,
    s_m_y_cop_01 = 0x5e3da4a4,
    s_m_y_dealer_01 = 0xe497bbef,
    s_m_y_devinsec_01 = 0x9b557274,
    s_m_y_dockwork_01 = 0x867639d1,
    s_m_y_doorman_01 = 0x22911304,
    s_m_y_dwservice_01 = 0x75d30a91,
    s_m_y_dwservice_02 = 0xf5908a06,
    s_m_y_factory_01 = 0x4163a158,
    s_m_y_fireman_01 = 0xb6b1eda8,
    s_m_y_garbage = 0xee75a00f,
    s_m_y_grip_01 = 0x309e7dea,
    s_m_y_hwaycop_01 = 0x739b1ef5,
    s_m_y_marine_01 = 0x65793043,
    s_m_y_marine_02 = 0x58d696fe,
    s_m_y_marine_03 = 0x72c0cad2,
    s_m_y_mime = 0x3cdca742,
    s_m_y_pestcont_01 = 0x48114518,
    s_m_y_pilot_01 = 0xab300c07,
    s_m_y_prismuscl_01 = 0x5f2113a1,
    s_m_y_prisoner_01 = 0xb1bb9b59,
    s_m_y_ranger_01 = 0xef7135ae,
    s_m_y_robber_01 = 0xc05e1399,
    s_m_y_sheriff_01 = 0xb144f9b9,
    s_m_y_shop_mask = 0x6e122c06,
    s_m_y_strvend_01 = 0x927f2323,
    s_m_y_swat_01 = 0x8d8f1b10,
    s_m_y_uscg_01 = 0xca0050e9,
    s_m_y_valet_01 = 0x3b96f23e,
    s_m_y_waiter_01 = 0xad4c724c,
    s_m_y_winclean_01 = 0x550d8d9d,
    s_m_y_xmech_01 = 0x441405ec,
    s_m_y_xmech_02_mp = 0x69147a0d,
    s_m_y_xmech_02 = 0xbe20fa04,
    u_f_m_corpse_01 = 0x2e140314,
    u_f_m_drowned_01 = 0xd7f37609,
    u_f_m_miranda = 0x414fa27b,
    u_f_m_promourn_01 = 0xa20899e7,
    u_f_o_moviestar = 0x35578634,
    u_f_o_prolhost_01 = 0xc512dd23,
    u_f_y_bikerchic = 0xfa389d4f,
    u_f_y_comjane = 0xb6aa85ce,
    u_f_y_corpse_01 = 0x9c70109d,
    u_f_y_corpse_02 = 0x0d9c72f8,
    u_f_y_hotposh_01 = 0x969b6dfe,
    u_f_y_jewelass_01 = 0xf0d4be2e,
    u_f_y_mistress = 0x5dca2528,
    u_f_y_poppymich = 0x23e9a09e,
    u_f_y_princess = 0xd2e3a284,
    u_f_y_spyactress = 0x5b81d86c,
    u_m_m_aldinapoli = 0xf0ec56e2,
    u_m_m_bankman = 0xc306d6f5,
    u_m_m_bikehire_01 = 0x76474545,
    u_m_m_doa_01 = 0x621e6bfd,
    u_m_m_edtoh = 0x2a797197,
    u_m_m_fibarchitect = 0x342333d3,
    u_m_m_filmdirector = 0x2b6e1bb6,
    u_m_m_glenstank_01 = 0x45bb1666,
    u_m_m_griff_01 = 0xc454bcbb,
    u_m_m_jesus_01 = 0xce2cb751,
    u_m_m_jewelsec_01 = 0xacccbdb6,
    u_m_m_jewelthief = 0xe6cc3cdc,
    u_m_m_markfost = 0x1c95cb0b,
    u_m_m_partytarget = 0x81f74de7,
    u_m_m_prolsec_01 = 0x709220c7,
    u_m_m_promourn_01 = 0xce96030b,
    u_m_m_rivalpap = 0x60d5d6da,
    u_m_m_spyactor = 0xac0ea5d8,
    u_m_m_streetart_01 = 0x6c19e962,
    u_m_m_willyfist = 0x90769a8f,
    u_m_o_filmnoir = 0x2bacc2db,
    u_m_o_finguru_01 = 0x46e39e63,
    u_m_o_taphillbilly = 0x9a1e5e52,
    u_m_o_tramp_01 = 0x6a8f1f9b,
    u_m_y_abner = 0xf0ac2626,
    u_m_y_antonb = 0xcf623a2c,
    u_m_y_babyd = 0xda116e7e,
    u_m_y_baygor = 0x5244247d,
    u_m_y_burgerdrug_01 = 0x8b7d3766,
    u_m_y_chip = 0x24604b2b,
    u_m_y_corpse_01 = 0x94c2a03f,
    u_m_y_cyclist_01 = 0x2d0efceb,
    u_m_y_fibmugger_01 = 0x85b9c668,
    u_m_y_guido_01 = 0xc6b49a2f,
    u_m_y_gunvend_01 = 0xb3229752,
    u_m_y_hippie_01 = 0xf041880b,
    u_m_y_imporage = 0x348065f5,
    u_m_y_juggernaut_01 = 0x90ef5134,
    u_m_y_justin = 0x7dc3908f,
    u_m_y_mani = 0xc8bb1e52,
    u_m_y_militarybum = 0x4705974a,
    u_m_y_paparazzi = 0x5048b328,
    u_m_y_party_01 = 0x36e70600,
    u_m_y_pogo_01 = 0xdc59940d,
    u_m_y_prisoner_01 = 0x7b9b4bc0,
    u_m_y_proldriver_01 = 0x855e36a3,
    u_m_y_rsranger_01 = 0x3c438cd2,
    u_m_y_sbike = 0x6af4185d,
    u_m_y_staggrm_01 = 0x9194ce03,
    u_m_y_tattoo_01 = 0x94ae2b8c,
    u_m_y_zombie_01 = 0xac4b4506,
    // new
    A_C_Panther = 0xe71d5e68,
    A_F_Y_Beach_02 = 0xb920cc2b,
    A_F_Y_ClubCust_04 = 0x2ee1e9a0,
    A_M_O_Beach_02 = 0xc1534df2,
    A_M_Y_Beach_04 = 0xb91a86bc,
    A_M_Y_ClubCust_04 = 0xe2210515,
    CS_Patricia_02 = 0x2efaa8c3,
    CSB_ARY = 0xb65c594e,
    CSB_EnglishDave_02 = 0xdd59656f,
    CSB_Gustavo = 0x8af43d22,
    CSB_HelmsmanPavel = 0x9f7e81f8,
    CSB_IslDJ_00 = 0x7a5ee1a5,
    CSB_IslDJ_01 = 0x34dfd6a4,
    CSB_ISLDJ_02 = 0x66143910,
    CSB_IslDJ_03 = 0x917b0fdd,
    CSB_IslDJ_04 = 0xb2bc525f,
    CSB_JIO = 0xa28b9e2d,
    CSB_JuanStrickler = 0xd74b8139,
    CSB_MiguelMadrazo = 0xdbb17082,
    CSB_MJO = 0xa0fda755,
    CSB_SSS = 0xe0dbdc60,
    G_M_M_CartelGuards_01 = 0x7ed5ad78,
    G_M_M_CartelGuards_02 = 0x6c8c08e5,
    IG_ARY = 0xcf0c7037,
    IG_EnglishDave_02 = 0x35ffa54a,
    IG_Gustavo = 0xb585b217,
    IG_HelmsmanPavel = 0xd7c1e2b1,
    IG_IslDJ_00 = 0xe2a32e68,
    IG_IslDJ_01 = 0x6f4747ce,
    IG_IslDJ_02 = 0x5d1da37b,
    IG_IslDJ_03 = 0x13360fa9,
    IG_IslDJ_04 = 0x806e6a1c,
    IG_ISLDJ_04_D_01 = 0xb193bd6a,
    IG_ISLDJ_04_D_02 = 0xfdf6562e,
    IG_ISLDJ_04_E_01 = 0x232d795d,
    IG_Jackie = 0x799e61f6,
    IG_JIO = 0x73775f3f,
    IG_JuanStrickler = 0x1e3e327d,
    IG_Kaylee = 0xa7810923,
    IG_MiguelMadrazo = 0xa5cd7cd8,
    IG_MJO = 0x2d5db362,
    IG_OldRichGuy = 0x3c04504a,
    IG_Patricia_02 = 0xc3114cb1,
    IG_Pilot = 0x864ed68e,
    IG_SSS = 0x3b18e305,
    S_F_Y_BeachBarStaff_01 = 0xc2e31a0a,
    S_F_Y_ClubBar_02 = 0x55c5627b,
    S_M_M_Bouncer_02 = 0x52060d92,
    S_M_M_DrugProcess_01 = 0x5c366c83,
    S_M_M_FieldWorker_01 = 0x9074ca50,
    S_M_M_HighSec_04 = 0x55fe9b46,
}
