import { Publication } from './publication';
/* tslint:disable */
export const PUBLICATIONS: Publication[] =
    [
        {
            title: '3DUI and the Phantom Limb: multisensory experience for embodiment of amputation',
            venue: 'VR 2020',
            authors: 'CALEPSO, A., GUARESE, R. L. M., VALER, R., IQUIAPAZA, Y., de JESUS OLIVEIRA, V. A., NEDEL, L. and MACIEL, A.',
            abstract: 'In the context of the 3DUI Contest promoted by the IEEE VR 2020, we propose an application to allow users to experience having an amputated arm. By providing both visual and haptic feedback, our application offers a multisensory experience to enhance the sense of embodiment. The user of our application should still feel their real limb attached to their bodies, and yet see their virtual avatar and interact with the virtual environment as an amputee. A simple task of handling and positioning objects in a table is proposed for the users to experience the difficulties of having a missing arm. As most amputees have the sensation that an amputated or missing limb is still attached, our application should allow users to experience the same feeling.',
            paper: '3dmanipulation/653200a517.pdf',
            tags: ['VR & AR', 'Haptics', 'Multimodal'],
            award: 'Best 3DUI Contest Award',
            videoUrl: 'https://www.youtube.com/embed/dTz8NANzs5Y'
        },
        {
            title: 'A Usability Assessment of Augmented Situated Visualization',
            venue: 'VR 2020',
            authors: 'GUARESE, R. L. M., BECKER, J., FENSTERSEIFER, H., CALEPSO, A., WALTER, M., FREITAS, C., NEDEL, L. and MACIEL, A.',
            abstract: 'The present work proposes the use of data visualization techniques allied to an Augmented Reality (AR) user interface to provide information for users to define the most convenient location to sit down at an event. This accounts for different sets of arbitrary demands by projecting 3D information directly atop the seats. The users can also rearrange the data to narrow down the search and switch the attribute being displayed, e.g. temperature, stage visibility, exit access or Wi-Fi signal. The proposed approach was tested against a comparable 2D interactive visualization of the same data. Each user performed twelve location choosing tasks in an average sized classroom. Qualitative and quantitative data indicated that the augmented solution is promising in some senses, exposing that AR may help users to make better decisions.',
            paper: '3dmanipulation/653200a637.pdf',
            tags: ['VR & AR', 'Mobile', 'Information Visualization'],
            award: 'Best Poster IEEE VR',
            videoUrl: 'https://www.youtube.com/embed/aDGI0GQExao'
        },
        {
            title: 'Musical Brush: Exploring Creativity in an AR-based Tool Combining Music and Drawing Generation',
            venue: 'VR 2020',
            authors: 'VALER, R., SCHRAMM, R. and NEDEL, L.',
            abstract: 'The 21st century’s economic growth and social transformation are hardly based on creativity. To help with the development of this skill, the Creativity Support Tools (CST) concept was proposed. Here, we introduce Musical Brush, an artistic-based CST mobile application for music and drawing improvisation. We investigated different types of interaction designs and audiovisual feedbacks, measuring their impact on creativity support. A user study with 26 subjects was conducted to verify the Creativity Support Index (CSI) score of each design. Results showed the suitability of the association of Musical Brush with Augmented Reality (AR) for creating new sounds and drawings.',
            paper: '3dmanipulation/653200a635.pdf',
            tags: ['VR & AR', 'Mobile', 'Multimodal'],
            award: 'Honorable Mention Poster IEEE VR',
            videoUrl: 'https://www.youtube.com/embed/2bkiaufWrlE'
        },
        {
            title: 'Evaluating an Immersive Space-Time Cube Geovisualization for Intuitive Trajectory Data Exploration',
            venue: 'VIS 2019 & TVCG',
            authors: 'WAGNER FILHO, J. A., STUERZLINGER, W. and NEDEL, L.',
            abstract: 'A Space-Time Cube enables analysts to clearly observe spatio-temporal features in movement trajectory datasets in geovisualization. However, its general usability is impacted by a lack of depth cues, a reported steep learning curve, and the requirement for efficient 3D navigation. In this work, we investigate a Space-Time Cube in the Immersive Analytics domain. Based on a review of previous work and selecting an appropriate exploration metaphor, we built a prototype environment where the cube is coupled to a virtual representation of the analyst\'s real desk, and zooming and panning in space and time are intuitively controlled using mid- air gestures.We compared our immersive environment to a desktop - based implementation in a user study with 20 participants across 7 tasks of varying difficulty, which targeted different user interface features.To investigate how performance is affected in the presence of clutter, we explored two scenarios with different numbers of trajectories.While the quantitative performance was similar for the majority of tasks, large differences appear when we analyze the patterns of interaction and consider subjective metrics.The immersive version of the Space - Time Cube received higher usability scores, much higher user preference, and was rated to have a lower mental workload, without causing participants discomfort in 25 - minute - long VR sessions.',
            paper: 'other/arxstc.pdf',
            tags: ['VR & AR', 'Information Visualization'],
            award: 'Honorable Mention Poster IEEE VR',
            videoUrl: 'https://player.vimeo.com/video/360049740'
        },
        {
            title: 'Balance Haptics Framework and Applications',
            venue: 'IEEE World Haptics 2019',
            authors: 'CALEPSO, A., SEIBEL, G., FIGUEIREDO, G., VILLA, S. and MACIEL, A.',
            abstract: 'In VR environments, presence is influenced by several factors. One that is often neglected is the sense of balance (Vestibular sense). Previous works on balance stimulation are based on cumbersome devices to physically change the user ground support. EXOS Wrist DK2 is wearable and ungrounded, but still provides rotational stimuli around the wrist that, especially when combined with the visual information in the VE, can potentially convey a suitable model for balance stimulation. This is similar to the well-known hanger effect. Besides the potential in entertainment by embedding the concept in virtual-reality games, such a system could have impactful applications for health, with rehabilitation exercises in physiotherapy, or to improve or recover one’s sense of equilibrium. Finally, domain-specific VR simulations could benefit from the fine continuous stimuli provided by the device in general manipulation tasks associated with balance.',
            paperUrl: 'http://www.worldhaptics2019.org/program/sicvr',
            tags: ['VR & AR', 'Haptics', 'Multimodal'],
            award: 'Student Innovation Challenge Award',
            image: 'exiiii-exos.jpg'
        },
        {
            title: 'Visualizing Structures in Confocal Microscopy Datasets Through Clusterization: A Case Study on Bile Ducts',
            venue: 'IEEE CBMS 2019',
            authors: 'CASTELLANOS BELTRAN, L. A., CRUZ, C., SANTOS, J. L., SHIVAKUMAR, P., BEZERRA, J. and FREITAS, C.',
            abstract: 'Three-dimensional datasets from biological tissues have increased with the evolution of confocal microscopy. Hepatology researchers have used confocal microscopy for investigating the microanatomy of bile ducts. Bile ducts are complex tubular tissues consisting of many juxtaposed microstructures with distinct characteristics. Since confocal images are difficult to segment because of the noise introduced during the specimen preparation, traditional quantitative analyses used in medical datasets are difficult to perform on confocal microscopy data and require extensive user intervention. Thus, the visual exploration and analysis of bile ducts pose a challenge in hepatology research, requiring different methods. This paper investigates the application of unsupervised machine learning to extract relevant structures from confocal microscopy datasets representing bile ducts. Our approach consists of pre-processing, clustering, and 3D visualization. For clustering, we explore the density-based spatial clustering for applications with noise (DBSCAN) algorithm, using gradient information for guiding the clustering. We obtained a better visualization of the most prominent vessels and internal structures.',
            paper: 'medicalapps/08787482.pdf',
            tags: ['Medical', 'Information Visualization'],
            image: 'bile.png'
        },
        {
            title: 'Phys-Sketch: Sketching 3D Dynamic Objects in Immersive Virtual Reality',
            venue: 'CGI 2019',
            authors: 'TICONA, J. A., VILLA, S., TORCHELSEN, R., MACIEL, A. and NEDEL, L.',
            abstract: 'Sketching was traditionally a 2D task. Even when the new generation of VR devices allowed to sketch in 3D, the drawn models remained essentially static representations. In this paper, we introduce a new physics-inspired sketching technique built on the top of Position-based Dynamics to enrich the 3D drawings with dynamic behaviors. A particle-based method allows interacting in real time with a wide range of materials including fluids, rigid bodies, soft bodies and clothes. Users can interact with the dynamic sketches and sculpt them while they move, deform and fall. We analyze the expressiveness of the system from the regard of two experienced artists. Thus, this paper also gives a starting point to move towards an improved generation of physics-enabled sketching applications.',
            paper: '3dmanipulation/Ticona2019_Chapter_Phys-SketchSketching3DDynamicO.pdf',
            tags: ['VR & AR', 'Simulation'],
            videoUrl: 'https://www.youtube.com/embed/SmifEHm6Qfo'
        },
        {
            title: 'Development and Usability Analysis of a Mixed Reality GPS Navigation Application for the Microsoft HoloLens',
            venue: 'CGI 2019',
            authors: 'GUARESE, R. L. M. and MACIEL, A.',
            abstract: 'Navigation in real environments is arguably one of the primary applications for the mixed reality (MR) interaction paradigm. We propose a wearable MR system based on off-the-shelf devices as an alternative to the widespread handheld-based GPS navigation paradigm. Our system uses virtual holograms placed on the terrain instead of the usual heads-up display approach where the augmentations follow the line of sight. In a user experiment, we assessed performance and usability. We monitored user attention through EEG while performing a navigation task using either the MR or the handheld interface. Results show that users deemed our solution to offer a higher visibility to both the oncoming traffic and the suggested route. EEG readings also exposed a significantly less demanding focus level for our prototype. An easiness to learn and use was also indicated for the MR system.',
            paper: '3dmanipulation/cgi_lncs_paper_renan.pdf',
            tags: ['VR & AR', 'Mobile'],
            videoUrl: 'https://www.youtube.com/embed/6haAVJAEqm4'
        },
        {
            title: 'Comfortable Immersive Analytics with the VirtualDesk Metaphor: Case Studies and Perspectives',
            venue: 'IEEE CG&A',
            authors: 'WAGNER FILHO, J. A., FREITAS, C. and NEDEL, L.',
            abstract: 'The VirtualDesk metaphor is an opportunity for more comfortable and efficient immersive data exploration, using tangible interaction with the analyst\'s physical work desk and embodied manipulation of mid- air data representations.In this paper, we present an extended discussion of its underlying concepts, and review and compare two previous case studies where promising results were obtained in terms of user comfort, engagement, and usability.We also discuss findings of a novel study conducted with geovisualization experts, pointing directions for improvement and future research.',
            paper: 'other/08640072.pdf',
            tags: ['VR & AR', 'Information Visualization'],
            videoUrl: 'https://player.vimeo.com/video/359999785'
        },
        {
            title: 'Using Visualization Techniques for Supporting Interaction with the TaxonomyBrowser Database',
            venue: 'SBC Journal on Interactive Systems 2018',
            authors: 'REY, M. and FREITAS, C.',
            abstract: 'TaxonomyBrowser is a biodiversity information system developed to manage data collected by biologists during field work as well as data resulting from further analyses. It was developed as a web application and stores data on a database organized according to the taxonomic tree of leaving species, i.e., specimens collected or observed during field work are recorded in the database classified as pertaining to some level in the taxonomic tree. In its first version, TaxonomyBrowser had a common, form-based user interface for managing the database. This work presents the new visualization-based interface of the system, describing the features that are available for entering data from collected specimens as well as accessing data through different visualization techniques. The interface was assessed by means of a survey with remote users in order to evaluate the provided features and validate the concept of a visualizationbased interface for such kind of system. Participants considered the application to be intuitive, and most of them provided positive feedback.',
            paper: 'other/79996-365201-1-PB.pdf',
            tags: ['Information Visualization'],
            videoUrl: 'https://www.youtube.com/embed/8S8czGmwY4w',
            image: 'reyJIS.png'
        },
        {
            title: 'Heat-based bidirectional phase shifting simulation using position-based dynamics',
            venue: 'C&G 2018',
            authors: 'VILLA, S., TICONA, J. A., TORCHELSEN, R., NEDEL, L. and MACIEL, A.',
            abstract: 'Phase-change phenomena are present in our daily life. Examples are the evaporation of a fluid when it reaches its boiling temperature, the condensation of water vapor in air due to the pressure changes or due to the difference of temperature in boundaries, and the melting of snow when winter is ending. Current development in physics-based animation allows the simulation of these phenomena, but an integrated solution for modeling bidirectional phase-shifting objects is not available for games and other virtual environments. In this work we present a temperature-based method that drives phase transition phenomena based on latent heat of materials using position-based dynamics (PBD). Modifications to density, viscosity and distance PBD constraints are proposed to simulate the necessary thermal phenomena. Results show that melting, fusion, evaporation, condensation, dilation and even convection effects can be obtained by modifying the original PBD constraints in function of latent heat.',
            paper: 'other/1-s2.0-S0097849318301389-main.pdf',
            tags: ['Simulation'],
            videoUrl: 'https://www.youtube.com/embed/NxDGKqG4MIA'
        },
        {
            title: 'Evaluation of Visual, Auditory and Vibro-Tactile Alerts in Supervised Interfaces',
            venue: 'SVR 2018',
            authors: 'SOUZA, G. A., AMAYA TORRES, L., DANI, V., VILLA, S., TICONA, J. A., MACIEL, A. and NEDEL, L.',
            abstract: 'In teleoperation, particularly when controlling systems performing tasks that must be supervised for many hours, human users cannot keep a high level of attention all time. An open issue in the design of such interfaces is to help the user to maintain a situational awareness. In this paper, we compare three types of alert signals aiming to inform users about critical situations that require their full attention. Haptic, visual and auditory signals were assessed as pre-attention mechanisms for tasks in a camera-based supervisory interface scenario. Results show that haptic alerts, for long term supervision, are more effective than auditory and visual ones.',
            paper: 'hapticpapers/08802446.pdf',
            tags: ['Multimodal', 'Mobile', 'Haptics'],
            image: 'cctv.png'
        },
        {
            title: 'VirtualDesk: A Comfortable and Efficient Immersive Information Visualization Approach',
            venue: 'EuroVis 2018 & CGF',
            authors: 'WAGNER FILHO, J. A., FREITAS, C. and NEDEL, L.',
            abstract: '3D representations are potentially useful under many circumstances, but suffer from long known perception and interaction challenges. Current immersive technologies, which combine stereoscopic displays and natural interaction, are being progressively seen as an opportunity to tackle this issue, but new guidelines and studies are still needed, especially regarding information visualization. Many proposed approaches are impractical for actual usage, resulting in user discomfort or requiring too much time or space. In this work, we implement and evaluate an alternative data exploration metaphor where the user remains seated and viewpoint change is only realisable through physical movements. All manipulation is done directly by natural mid-air gestures, with the data being rendered at arm’s reach. The virtual reproduction of the analyst’s desk aims to increase immersion and enable tangible interaction with controls and two dimensional associated information. A comparative user study was carried out against a desktop-based equivalent, exploring a set of 9 perception and interaction tasks based on previous literature and a multidimensional projection use case. We demonstrate that our prototype setup, named VirtualDesk, presents excellent results regarding user comfort and immersion, and performs equally or better in all analytical tasks, while adding minimal or no time overhead and amplifying user subjective perceptions of efficiency and engagement. Results are also contrasted to a previous experiment employing artificial flying navigation, with significant observed improvements.',
            paper: 'other/cgf.13430.pdf',
            tags: ['VR & AR', 'Information Visualization'],
            videoUrl: 'https://player.vimeo.com/video/269773335'
        },
        {
            title: 'Immersive Visualization of Abstract Information: An Evaluation on Dimensionally-Reduced Data Scatterplots',
            venue: 'VR 2018',
            authors: 'WAGNER FILHO, J. A., REY, M., FREITAS, C. and NEDEL, L.',
            abstract: 'The use of novel displays and interaction resources to support immersive data visualization and improve analytical reasoning is a research trend in the information visualization community. In this work, we evaluate the use of an HMD-based environment for the exploration of multidimensional data, represented in 3D scatterplots as a result of dimensionality reduction (DR). We present a new modeling for this problem, accounting for the two factors whose interplay deter- mine the impact on the overall task performance: the difference in errors introduced by performing dimensionality reduction to 2D or 3D, and the difference in human perception errors under different visualization conditions. This two-step framework offers a simple approach to estimate the benefits of using an immersive 3D setup for a particular dataset. Here, the DR errors for a series of roll call voting datasets when using two or three dimensions are evaluated through an empirical task-based approach. The perception error and overall task performance, on the other hand, are assessed through a comparative user study with 30 participants. Results indicated that perception errors were low and similar in all approaches, resulting in overall performance benefits in both desktop and HMD-based 3D techniques. The immersive condition, however, was found to require less effort to find information and less navigation, besides providing much larger subjective perception of accuracy and engagement.',
            paper: 'other/wagnerfilho.pdf',
            tags: ['VR & AR', 'Information Visualization'],
            videoUrl: 'https://player.vimeo.com/video/404420688'
        },
        {
            title: 'A Visualization-based Approach for the TaxonomyBrowser Interface',
            venue: 'IHC 2017',
            authors: 'REY, M. and FREITAS, C.',
            abstract: 'The process of collecting biological data is a continuous ac-tivity, specially in ﬁeld work for research projects or teachingactivities. Data obtained from these collecting activities needto be properly stored in order to be readily available for futureanalysis. TaxonomyBrowser is a biodiversity information sys-tem mainly developed to manage data collected by biologistsduring ﬁeld work. It stores such data on a database organizedaccording the taxonomic tree of leaving species. This workdescribes a new approach for the TaxonomyBrowser’s userinterface, focusing on providing an easier and more intuitivemethod of managing and visualizing the information storedin such databases. The approach was assessed by means of asurvey conducted with users from the ﬁeld of study as well asusers with no knowledge on biodiversity information systems.The participants considered the application to be good andmostly provided positive feedback.',
            paper: 'other/3160504.3160523.pdf',
            tags: ['Information Visualization'],
            videoUrl: 'https://www.youtube.com/embed/8S8czGmwY4w',
            image: 'reyIHC.png'
        },
        {
            title: 'Immersive Analytics of Dimensionally-Reduced Data Scatterplots',
            venue: 'VIS 2017',
            authors: 'WAGNER FILHO, J. A., REY, M., FREITAS, C. and NEDEL, L.',
            abstract: 'In this work, we evaluate the use of an HMD-based Immersive Analytics approach to explore multidimensional data. Our main hypothesis is that the benefits obtained, such as a more natural interaction and an egocentric view of the data, besides the stereopsis, will be able to compensate the typical downsides of three dimensional visualization, enabling a better comprehension of distances and outliers. This hypothesis was tested through a case study with roll call analysis, using dimensionally-reduced voting data from the Brazilian Chamber of Deputies. A user study was conducted to allow a comparative analysis between the desktop-based 2D, desktop-based 3D and HMD-based 3D approaches. Results indicate advantages in accuracy in a point classification task with respect to the original dataset, as well as in distance perception and outlier identification tasks with respect to the principal components being visualized. The proposed immersive framework was also well rated in terms of user perception, with the best scores for accuracy and engagement.',
            paper: 'other/c22dab5316e9eff5a86c06dd66a2ebf196ff.pdf',
            tags: ['VR & AR', 'Information Visualization'],
            image: 'wagnerFilho2017.png'
        },
        {
            title: 'Design and Evaluation of a Handheld-based 3D User Interface for Collaborative Object Manipulation',
            venue: 'CHI 2017',
            authors: 'GRANDI, J. G., DEBARRBA, H. G., NEDEL, L. and MACIEL, A.',
            abstract: 'Object manipulation in 3D virtual environments demands a combined coordination of rotations, translations and scales, as well as the camera control to change the user’s viewpoint. Then, for many manipulation tasks, it would be advantageous to share the interaction complexity among team members. In this paper we propose a novel 3D manipulation interface based on a collaborative action coordination approach. Our technique explores a smartphone – the touchscreen and inertial sensors – as input interface, enabling several users to collaboratively manipulate the same virtual object with their own devices. We first assessed our interface design on a docking and an obstacle crossing tasks with teams of two users. Then, we conducted a study with 60 users to understand the influence of group size in collaborative 3D manipulation. We evaluated teams in combinations of one, two, three and four participants. Experimental results show that teamwork increases accuracy when compared with a single user. The accuracy increase is correlated with the number of individuals in the team and their work division strategy.',
            paper: '3dmanipulation/Collaborative3DUI_CHI.pdf',
            tags: ['VR & AR', 'Mobile', 'Multimodal'],
            image: 'acadcover2.png'
        },
        {
            title: 'Designing a Vibrotactile Head-mounted Display for Spatial Awareness in 3D Spaces',
            venue: 'IEEE VR 2017 & TVCG',
            authors: 'de JESUS OLIVEIRA, V. A., BRAYDA, L., NEDEL, L., MACIEL, A.',
            abstract: 'Due to the perceptual characteristics of the head, vibrotactile Head-mounted Displays are built with low actuator density. Therefore, vibrotactile guidance is mostly assessed by pointing towards objects in the azimuthal plane. When it comes to multisensory interaction in 3D environments, it is also important to convey information about objects in the elevation plane. In this paper, we design and assess a haptic guidance technique for 3D environments. First, we explore the modulation of vibration frequency to indicate the position of objects in the elevation plane. Then, we assessed a vibrotactile HMD made to render the position of objects in a 3D space around the subject by varying both stimulus loci and vibration frequency. Results have shown that frequencies modulated with a quadratic growth function allowed a more accurate, precise, and faster target localization in an active head pointing task. The technique presented high usability and a strong learning effect for a haptic search across different scenarios in an immersive VR setup.',
            paper: 'hapticpapers/VR2017.pdf',
            tags: ['VR & AR', 'Multimodal', 'Haptics'],
            video: 'haptics/VR2017.mp4'
        },
        {
            title: 'Efficient Surgical Cutting with Position-based Dynamics',
            venue: 'IEEE Computer Graphics & Applications (Volume: 38, Issue: 3, May-June 2017)',
            authors: 'BERNT, I., TORCHELSEN, R., MACIEL, A.',
            abstract: 'Simulations of cuts on deformable bodies have been an active research subject for more than two decades. However, previous works based on finite element methods and mass spring meshes cannot scale to complex surgical scenarios. This article presents a novel method that uses position-based dynamics (PBD) for mesh-free cutting simulation. The proposed solutions include a method to efficiently render force feedback while cutting, an efficient heat diffusion model to simulate electrocautery, and a novel adaptive skinning scheme based on oriented particles.',
            paperUrl: 'https://dx.doi.org/10.1109/MCG.2017.45',
            award: 'Best Demo - People\'s Choice Award - Symposium on Virtual and Augmented Reality 2016',
            tags: ['Haptics', 'Medical'],
            video: 'medicalapps/156909.mp4'
        },
        {
            title: 'A laparoscopy-based method for BRDF estimation from in vivo human liver',
            venue: 'Medical Image Analysis 2017',
            authors: 'NUNES, A.L.P., MACIEL, A., CAVAZZOLA, L.T., MARCELO, W.',
            abstract: 'While improved visual realism is known to enhance training effectiveness in virtual surgery simulators, the advances on realistic rendering for these simulators is slower than similar simulations for man-made scenes. One of the main reasons for this is that in vivo data is hard to gather and process. In this paper, we propose the analysis of videolaparoscopy data to compute the Bidirectional Reflectance Distribution Function (BRDF) of living organs as an input to physically based rendering algorithms. From the interplay between light and organic matter recorded in video images, we propose the definition of a process capable of establishing the BRDF for inside-the-body organic surfaces. We present a case study around the liver with patient-specific rendering under global illumination. Results show that despite the limited range of motion allowed within the body, the computed BRDF presents a high-coverage of the sampled regions and produces plausible renderings.',
            paperUrl: 'http://dx.doi.org/10.1016/j.media.2016.09.005',
            tags: ['Medical'],
            video: 'medicalapps/invivoBRDFrendering.mp4'
        },
        {
            title: 'Collaborative 3D Manipulation using Mobile Phones',
            venue: '3DUI Contest 2016',
            authors: 'GRANDI, J. G., BERNDT, I., DEBARRBA, H. G., NEDEL, L. and MACIEL, A.',
            abstract: 'We present a 3D user interface for collaborative manipulation of three-dimensional objects in virtual environments. It maps inertial sensors, touch screen and physical buttons of a mobile phone into well-known gestures to alter the position, rotation and scale of virtual objects. As these transformations require the control of multiple degrees of freedom (DOF), collaboration is proposed as a solution to coordinate the modification of each and all the available DOFs. Users are free to define their manipulation roles. All virtual elements are displayed in a single shared screen, which is handy to aggregate multiple users in the same physical space.',
            paper: '3dmanipulation/Collaborative3DUI.pdf',
            award: 'Best 3DUI Contest Award',
            tags: ['VR & AR', 'Multimodal', 'Mobile'],
            video: '3dmanipulation/Collaborative3DUI.mp4'
        },
        {
            title: 'Tactile Treasure Map: Integrating Allocentric and Egocentric Information for Tactile Guidance',
            venue: 'ASIAHAPTICS 2016',
            authors: 'MEMEO, M., de JESUS OLIVEIRA, V. A., NEDEL, L., MACIEL, A., BRAYDA, L.',
            abstract: 'With interactive maps a person can manage to find the way from one point to another, using an allocentric perspective (e.g. Google Maps), but also looking at a location as from the inside of the map with an egocentric perspective (e.g. Google Street View). Such experience cannot be performed with tactile maps, mostly explored from a top-view. To solve this, we built a system with two different but complementary devices. When coupled, they can provide both allocentric and egocentric spatial information to support the exploration of interactive tactile maps. To show the potential of the system, we built a blind treasure hunt.',
            paper: 'hapticpapers/MemeoOliveira_TactileTreasureMap.pdf',
            award: 'Third Place - People\'s Choice Award',
            tags: ['Haptics'],
            video: 'haptics/asia.mp4'
        },
        {
            title: 'Medical Imaging VR: Can Immersive 3D Aid in Diagnosis?',
            venue: 'VRST 2016',
            authors: 'José Venson, Jean Berni, Carlos Maia, Ana Marques3, Marcos d’Ornelas and Anderson Maciel',
            abstract: 'In the radiology diagnosis, medical images are most often visualized slice by slice on 2D screens or printed. At the same time, the visualization based on 3D volumetric rendering of the data is considered useful and has increased its field of application. We report a user study to assess VR usage in the diagnostic procedure of fracture identification. In addition, we assessed the subjects perception of the 3D reconstruction quality and ease of interaction.',
            paper: 'other/PosterVRST17.pdf',
            tags: ['VR & AR', 'Medical'],
            video: 'medicalapps/PosterVRST17.mp4'
        },
        {
            title: 'Immersive Visualization for 3D Volumetric Medical Images',
            venue: 'SVR 2016',
            authors: 'José Venson, Jean Carlo Berni and Anderson Maciel',
            abstract: 'In diagnosis, 3D image acquisition is ubiquitous (e.g. CT and MRI). Nevertheless, the outgoing images are most often visualized slice by slice on 2D screens or printed out. In some specific cases, however, it is useful to visualize a 3D volumetric rendering of the data. This is done as interactive projections on 2D conventional monitors, and allows a specialist to manipulate visualization parameters with mouse and keyboard. In this demonstration we illustrate the practical use of a VR interface allowing volumetric visualization of digital medical images. Our interface is based on an HMD to provide viewpoint control and windowing actions with high affordance. The interface is integrated with a picture archiving and communication system (PACS), which makes it available at the front-end used for actual image-based diagnosis and appointment with patients. The demo provides two alternative implementations. The first runs on a desktop environment attached to an Oculus Rift and a clicker. The second is mobile and affordable. It uses a smartphone adapted as an HMD using Google Cardboard or other 3D printed HMDs. In the current version, both implementations allow rotations, translations and windowing (to select the density corresponding to bone or soft tissue, e.g.) in the reconstructed volume. A simple switch action such as a click on a joystick or a trigger on the HMD allow navigating through the visualization options. The demo is intended to be used in experiments with specialists as part of an exploratory study to evaluate usability, visual quality and accuracy for clinical practice.',
            tags: ['VR & AR', 'Medical'],
            video: 'medicalapps/156233.mov'
        },
        {
            title: 'Lossless Multitasking: Using 3D gestures embedded in mouse devices',
            venue: 'SVR 2016',
            authors: 'FRANZ, J., MENIN, A. and NEDEL, L.',
            abstract: 'Desktop-based operating systems allow the use of many applications concurrently, but the frequent switching between two or more applications distracts the user, preventing him to keep focused in the main task. In this work we introduce an augmented mouse, which supports the regular 2D movements and clicks, as well as 3D gestures performed over it. While the keyboard and mouse conventional operation are used for the main task, with 3D gestures the user can control secondary tasks. As a proof of concept, we embedded a Leap Motion Controller device inside a regular mouse. User tests have been conducted firstly to help in the selection of the gestures supported, and then to evaluate the device effectiveness and usability. Results shown that the use of the augmented mouse as a strategy to keep the user focused reduces the task completion time.',
            tags: ['Multimodal'],
            video: 'other/gestures.mp4'
        },
        {
            title: 'Localized Magnification in Vibrotactile HMDs for Accurate Spatial Awareness',
            venue: 'EUROHAPTICS 2016',
            authors: 'de JESUS OLIVEIRA, V. A., NEDEL, L., MACIEL, A., BRAYDA, L.',
            abstract: 'Actuator density is an important parameter in the design of vibrotactile displays. When it comes to obstacle detection or navigation tasks, a high number of tactors may provide more information, but not necessarily better performance. Depending on the body site and vibration parameters adopted, high density can make it harder to detect tactors in an array. In this paper, we explore the trade-off between actuator density and precision by comparing three kinds of directional cues. After performing a within-subject naive search task using a head-mounted vibrotactile display, we found that increasing the density of the array locally provides higher performance in detecting directional cues.',
            paper: 'hapticpapers/Eurohaptics.pdf',
            tags: ['Haptics'],
            image: 'task.png'
        },
        {
            title: 'Spatial Discrimination of Vibrotactile Stimuli Around the Head',
            venue: 'Haptics Symposium 2016',
            authors: 'de JESUS OLIVEIRA, V. A., NEDEL, L., MACIEL, A., BRAYDA, L.',
            abstract: 'Several studies evaluated vibrotactile stimuli on the head to aid orientation and communication. However, the acuity for vibration of the head\'s skin still needs to be explored.In this paper, we report the assessment of the spatial resolution on the head.We performed a 2AFC psychophysical experiment systematically varying the distance between pairs of stimuli in a standard- comparison approach.We took into consideration not only the perceptual thresholds but also the reaction times and subjective factors, like workload and vibration pleasantness.Results show that the region around the forehead is not only the most sensitive, with thresholds under 5mm, but it is also the region wherein the spatial discrimination was felt to be easier to perform.We also have found that it is possible to describe acuity on the head for vibrating stimulus as a function of skin type(hairy or glabrous) and of the distance of the stimulated loci from the head midline.',
            paper: 'hapticpapers/Paper113_SpatialDiscrimination.pdf',
            tags: ['Haptics'],
            image: 'regions.png'
        },
        {
            title: 'Proactive Haptic Articulation for Intercommunication in Collaborative Virtual Environments',
            venue: '3DUI 2016',
            authors: 'de JESUS OLIVEIRA, V. A., NEDEL, L., MACIEL, A.',
            abstract: 'In this paper, we look upon elements present in speech articulation to introduce proactive haptic articulation as a novel approach for communication in Collaborative Virtual Environments. We defend the hypothesis that elements present in natural language, when added to the design of the vibrotactile vocabulary, should provide an expressive medium for intercommunication. Moreover, the ability to render tactile cues to a teammate should encourage users to extrapolate a given vocabulary while using it. We implemented a collaborative puzzle task to observe the use of such vocabulary. Results show that participants autonomously adapted it to attend their communication needs during the assembly.',
            paper: 'hapticpapers/3DUI2016.pdf',
            tags: ['VR & AR', 'Multimodal', 'Haptics'],
            video: 'haptics/Proactive.mp4'
        },
        {
            title: 'Guidelines for Designing Dynamic Applications With Second Screen',
            venue: 'SVR 2015',
            authors: 'Bruno Pagno, Diogo Costa, Leandro Guedes, Carla Dal Sasso Freitas and Luciana Nedel',
            abstract: 'The concept of second screen became popular with the introduction of interactive TVs. In this context, while the user focuses on the TV screen, the exploration of additional content is possible through the use of a smartphone or tablet as a second screen. Lately, dynamic applications, e.g. video games, also started to use a second screen. Nintendo DS and Wii U are the game consoles that began to incorporate these ideas. Dynamic applications are based on real time action and interaction, and their implementation can be very complex specially because users have to change focus between the displays frequently. In this paper, we summarize the results found in a set of experimental studies we conducted to verify the usability of interaction techniques based on the use of a second auxiliary screen in dynamic applications. We developed a multiplayer game that employs one main screen shared by two players, each one also using a second (private) screen. From these studies, we elaborate a set of guidelines to help developers in the use of second screens. Although future case studies would improve these guidelines, our experiments show that they contribute with robust principles for developers who want to build multiscreen applications.',
            paper: '3dmanipulation/SecondScreenSVR2015.pdf',
            tags: ['Mobile'],
            video: '3dmanipulation/SecondScreenSVR2015.mp4'
        },
        {
            title: 'Blind Guardian: A Sonar-Based Solution for Avoiding Collisions with the Real World',
            venue: 'SVR 2015',
            authors: 'Marina F. Rey, Inatan Hertzog, Nicolas Kagami and Luciana Nedel',
            abstract: 'Sightless navigation is an ever-present issue that affects a great part of the population. The affected include permanent or temporarily blind individuals, persons walking in the dark, and users of immersive virtual environments using real walking for navigation. This paper presents an alternative solution to this problem, which relies on a simple wearable device based on ultrasonic waves to detect obstacles and on vibrotactile feedback to warn the user of nearby obstacles. In the following pages, we describe the design and implementation of this apparatus, called the Blind Guardian. We conducted user tests with 29 subjects in a controlled environment. Results demonstrated the potential of Blind Guardian for future use in real life situations, as well as for immersive virtual reality applications based on the use of head-mounted displays.',
            paper: 'hapticpapers/BlindGuardian.pdf',
            tags: ['VR & AR', 'Haptics'],
            video: 'haptics/BlindGuardian.mp4'
        },
        {
            title: 'Spatially Aware Mobile Interface for 3D Visualization and Interactive Surgery Planning',
            venue: 'SEGAH 2014',
            authors: 'GRANDI, J. G., DEBARBA, H. G., ZANCHET, D. J. and MACIEL, A.',
            abstract: 'While medical images are fundamental in the surgery planning procedure, the process of analysis of such images slice-by-slice is still tedious and inefficient. In this work we introduce a system for exploration of the internal anatomy structures directly on the surface of the real body using a mobile display device as a window to the interior of the patient’s body. The method is based on volume visualization of standard computed tomography datasets and augmented reality for interactive visualization of the generated volume. It supports our liver surgery planner method in the analysis of the segmented liver and in the color classification of the vessels. We present a set of experiments showing the system’s ability to operate on mobile devices. Quantitative performance results are detailed, and applications in teaching anatomy and doctor-patient communication are discussed.',
            paper: '3dmanipulation/LivAR.pdf',
            tags: ['VR & AR', 'Multimodal', 'Mobile', 'Medical'],
            video: '3dmanipulation/LivAR.mp4'
        },
        {
            title: 'The Point Walker Multi-label Approach',
            venue: '3DUI Contest 2014',
            authors: 'Hernandi Krammes, Marcio M. Silva, Theodoro Mota, Matheus T. Tura, Anderson Maciel, Luciana Nedel',
            abstract: 'This paper presents a 3D user interface to select and label point sets in a point cloud. A walk-in-place strategy based on a weight platform is used for navigation. Selection is made in two levels of precision. First, a pointing technique is used relying on a smartphone and built-in sensors. Then, an ellipsoidal selection volume is deformed by pinching on the smartphone touchscreen in different orientations. Labels are finally selected by pointing icons and a hierarchy of labels is automatically defined by multiple labelling. Voice is used to create new icons/labels. The paper describes the concepts in our approach and the system implementation.',
            paper: '3dmanipulation/3DUI14.pdf',
            tags: ['VR & AR','Multimodal', 'Mobile'],
            video: '3dmanipulation/ThePointWalker.mp4'
        },
        {
            title: 'Tactile Interface for Navigation in Underground Mines',
            venue: 'SVR 2014',
            authors: 'de JESUS OLIVEIRA, V. A., MARQUES, E., PERONI, R. de L. and MACIEL, A.',
            abstract: 'This paper presents the design and evaluation of a tactile vocabulary to aid navigation in an underground mine. We studied different ways to construct tactile vocabularies and assessed several tactile icons for aid navigation. After trying a dozen stimuli families, we have selected tactons based on the users\' ability to perceive and process them during navigation in virtual environments to design a more usable tactile interface.Then, we performed a user experiment in a virtual simulation of an emergency situation in an underground mine.The user study shows that the tactile feedback facilitated the execution of the task.Also, the perceptual adjustment of the tactile vocabulary increased its usability as well as the memorization of its signals.',
            paper: 'hapticpapers/SVR2014.pdf',
            award: 'Best Application Paper Award',
            tags: ['VR & AR', 'Multimodal', 'Haptics'],
            video: 'haptics/SVR2014.mp4'
        },
        {
            title: 'Assessment of Tactile Languages as Navigation Aid in 3D Environments',
            venue: 'EUROHAPTICS 2014',
            authors: 'de JESUS OLIVEIRA, V. A. and MACIEL, A.',
            abstract: 'In this paper we present the design and evaluate alternative tactile vocabularies to support navigation in 3D environments. We have focused on the tactile communication expressiveness by applying a prefixation approach in the construction of the tactile icons. We conducted user experiments to analyze the effects of both prefixation and the use of tactile sequences on the user\'s performance in a navigation task.Results show that, even if tactile sequences are more difficult to process during the navigation task, the prefixed patterns were easier to learn in all assessed vocabularies.',
            paper: 'hapticpapers/PaperAssessment.pdf',
            tags: ['VR & AR', 'Multimodal', 'Haptics'],
            video: 'haptics/eurohaptics2014_147.mp4'
        },
        {
            title: 'Introducing the Modifier Tactile Pattern for Vibrotactile Communication',
            venue: 'EUROHAPTICS 2014',
            authors: 'de JESUS OLIVEIRA, V. A. and MACIEL, A.',
            abstract: 'We introduce the concept of "Modifier Tactile Pattern" as a pattern that modifies the interpretation of other elements that compose a Tacton or an entire tactile message. This concept was inspired by the prefixation strategies of the Braille system. We also show how to design tactile languages applying the concept of Modifier by following method- ologies and approaches of Tacton design that already exist in literature. Then a modifier-based tactile language is designed and assessed in a user study.',
            paper: 'hapticpapers/PaperModifier.pdf',
            tags: ['Haptics'],
            video: 'haptics/eurohaptics2014_145.mp4'
        },
        {
            title: 'Disambiguation Canvas: A Precise Selection Technique for Virtual Environments',
            venue: 'INTERACT 2013',
            authors: 'DEBARBA, H. G., GRANDI, J. G., MACIEL, A., NEDEL, L. and BOULIC R.',
            abstract: 'We present the disambiguation canvas, a technique developed for easy, accurate and fast selection of small objects and objects inside cluttered virtual environments. Disambiguation canvas rely on selection by progressive refinement, it uses a mobile device and consists of two steps. During the first, the user defines a subset of objects by means of the orientation sensors of the device and a volume casting pointing technique. The subsequent step consists of the disambiguation of the desired target among the previously defined subset of objects, and is accomplished using the mobile device touchscreen. By relying on the touchscreen for the last step, the user can disambiguate among hundreds of objects at once. User tests show that our technique performs faster than ray-casting for targets with approximately 0.53 degrees of angular size, and is also much more accurate for all the tested target sizes.',
            paper: '',
            tags: ['VR & AR', 'Multimodal', 'Mobile', 'Multi-displays'],
            video: '3dmanipulation/DisambiguationCanvas.mp4'
        },
        {
            title: 'Study of the Sensors Embedded in Smartphones for Use in Indoor Localization',
            venue: 'SVR 2013',
            authors: 'Ivan Boesing, Tomaz Silva and Luciana Nedel',
            abstract: 'In recent years, smartphones experienced a fast technological growth, approaching its computational capacity to personal computers. In addition to that, new hardware and sensors are being incorporated into these devices. The smartphone’s embedded sensors are a low cost solution that allows interactions between humans, computers and the environment. Examples include applications designed to identify the user’s location by GPS receiver, games that use accelerometers and/or gyroscope, Wi-Fi and Bluetooth antennas that exchange information between users, microphones that perceive user’s gestural movements, and so on. This paper presents a study of the various smartphones sensors, detailing their operation and identifying their main features, advantages, drawbacks, and potential of use for indoor location. We analyzed smartphones sensitive to sound, Wi-Fi, magnetic field, 3-dimensional linear acceleration and angular velocity. This study presented – as the ideal solution – a fusion of sensors to complement individual skills and to improve the information accuracy regarding the device’s rotation and translation.',
            paper: '3dmanipulation/svr2013.pdf',
            tags: ['Mobile'],
            image: 'images/svr2013.png'
        },
        {
            title: 'Interacting with Danger in an Immersive Environment',
            venue: 'VRST 2013',
            authors: 'Vitor A. M. Jorge, Wilson J. Sarmiento, Anderson Maciel, Luciana Nedel, César A. Collazos, Frederico Faria, Jackson Oliveira',
            abstract: 'Any human-computer interface imposes a certain level of cognitive load to the user task. Analogously, the task itself also imposes different levels of cognitive load. It is common sense in 3D user interfaces research that a higher number of degrees of freedom increases the interface cognitive load. If the cognitive load is significant, it might compromise the user performance and undermine the evaluation of user skills in a virtual environment. In this paper, we propose an assessment of two immersive VR interfaces with varying degrees of freedom in two VR tasks: risk perception and basic object selection. We examine the effectiveness of both interfaces in these two different tasks. Results show that the number of degrees of freedom does not significantly affect a basic selection task, but it affects risk perception task in an unexpected way.',
            tags: ['VR & AR'],
            video: 'other/VRST.mp4'
        },
        {
            title: 'Assessment of a User Centered Interface for Teleoperation and 3D Environments',
            venue: 'SAC 2013',
            authors: 'Juliano Franz, Anderson Maciel and Luciana Nedel',
            abstract: 'The efficient, natural and precise selection and manipulation of nearby objects in 3D environments is yet a challenge in the area of 3D interaction. Robot teleoperation is a potential application field for this kind of interaction and a difficult task. In part due to the low quality of the information delivered to the operator, but also because of the non-natural interfaces used to operate the robot. This paper presents a direct 3D user interface based on visual and haptic feedback that can be correctly operated by untrained users. The interface offers a higher level of presence than the average existing solutions, and involves the use of the operator’s primary hand to control a robotic arm using a Phantom device. Spatial awareness, in turn, is obtained from stereoscopic vision and motion parallax effect. The main contribution though is an assessment study to investigate which interface elements maximize user performance and if any interface elements is counter-effective. Surprising results show that parallax is the most effective feature while stereoscopy is often detrimental and force feedback requires training.',
            paper: 'other/SAC13.pdf',
            tags: ['VR & AR'],
            image: 'SAC13.png'
        },
        {
            title: 'LOP-cursor: Fast and precise interaction with tiled displays using one hand and levels of precision',
            venue: '3DUI 2012',
            authors: 'DEBARBA, H. G., NEDEL, L. and MACIEL, A.',
            abstract: 'We present levels of precision (LOP) cursor, a metaphor for high precision pointing and simultaneous cursor controlling using commodity mobile devices. The LOP-cursor uses a two levels of precision representation that can be combined to access low and high resolution of input. It provides a constrained area of high resolution input and a broader area of lower input resolution, offering the possibility of working with a two legs cursor using only one hand. LOP-cursor is designed for interaction with large high resolution displays, e.g. display walls, and distributed screens/computers scenarios. This paper presents the design of the cursor, the implementation of a prototype, and user evaluation experiments showing that our method allows both, the acquisition of small targets, and fast interaction while using simultaneous cursors in a comfortable manner. Targets smaller than 0.3 cm can be selected by users at distances over 1.5 m from the screen with minimum effort.',
            paper: '3dmanipulation/LOPCursor.pdf',
            tags: ['VR & AR', 'Multimodal', 'Mobile', 'Multi-displays'],
            video: '3dmanipulation/LOP.mp4'
        },
        {
            title: 'Inclusive Games: A Multimodal Experience for Blind Players',
            venue: 'SBGAMES 2011',
            authors: 'Jean Felipe Patikowski Cheiran, Luciana Nedel and Marcelo Pimenta',
            abstract: 'Electronic games have an important role in the human development so we can face the world of constantly changing technologies. Considering that the most of games is grounded in the interaction through visual elements and that the most of alternate games for blind is less attractive to non-blind people, we have developed a prototype of a 3D environment with dense sound experience and haptic feedback that would allow to blind and non-blind users orientate and move through it. Designing this environment like a game, we have employed blindfolded and non-blindfolded users to evaluate the major interaction issues in order to refine the software and make it mature to be used for the research with blind subjects.',
            paper: 'hapticpapers/SBGamesFinal.pdf',
            tags: ['VR & AR', 'Multimodal', 'Haptics'],
            video: 'haptics/SBGamesFinal.mp4'
        },
        {
            title: 'The cube of doom: A bimanual perceptual user Experience',
            venue: '3DUI Contest 2011',
            authors: 'DEBARBA, H. G., FRANZ, J., REUS, V., MACIEL, A. and NEDEL, L.',
            abstract: 'This paper presents a 3D user interface to solve a three-dimensional wooden blocks puzzle. Such interface aims at reproducing the real scenario of puzzle solving using involving devices and techniques for interaction and visualization which include a mobile device, haptics and enhanced stereo vision. The paper describes our interaction approach, the system implementation and user experiments.',
            paper: '3dmanipulation/CubeOfDoom.pdf',
            tags: ['VR & AR', 'Multimodal', 'Mobile'],
            video: '3dmanipulation/CubeOfDoom.mp4'
        },
        {
            title: 'Why not with the foot?',
            venue: 'SBGAMES 2011',
            authors: 'Erivaldo Xavier de Lima Filho, Mateus Bisotto Nunes, João Comba and Luciana Nedel',
            abstract: 'The evolution of graphics hardware in the past decade has made it possible to generate scenes in computer games with a high degree of realism, which in turn, requires richer interactions. However, while the number and complexity of possible interactive tasks increases, the motor capabilities of humans remains almost constant. One solution for this issue is to use other communication strategies. In this paper, we explore the foot as an interaction channel and demonstrate its viability to accomplish different tasks. We also show that interaction using the foot can be easily and efficiently implemented under different hardware configurations. To validate our hypothesis, we present results of three experiments involving different hardware and software configurations, and summarize the lessons learned and discuss potential avenues to continue this work.',
            paper: 'other/FootSBGames11.pdf',
            tags: ['Multimodal'],
            image: 'FootSBGames11.png'
        },
        {
            title: 'Reality Cues-Based Interaction Using Whole-Body Awareness',
            venue: 'SAC 2010',
            authors: 'MACIEL, A. and NEDEL, L., JORGE, V. A. M., IBIAPINA, J. M. T., SILVA, L. F. M. S.',
            abstract: 'The exploration of 3D environments using 6 degrees-of-freedom interaction is still a challenge since users easily become disoriented. In this paper we discuss the benefits of the whole-body awareness in 3D interactive applications. We propose a technique for navigation and selection in 3D environments which explores the peephole metaphor with a tablet PC. In practice, the tablet is held by the participant who moves it around and points it in any direction for visualization and interaction. The method was tested with a set of users who were asked to perform selection tasks. The technique presented competitive results when compared with conventional interaction methods and also showed that real world body orientation memory helps users to perform better in the virtual world.',
            paper: '3dmanipulation/Peep.pdf',
            tags: ['VR & AR', 'Mobile'],
            video: '3dmanipulation/Peep.mp4'
        },
        {
            title: 'Collaborative Interaction through Spatially Aware Moving Displays',
            venue: 'SAC 2010',
            authors: 'Anderson Maciel, Luciana P. Nedel, Eduardo M. Mesquita, Marcelo H. Mattos, Gustavo M. Machado, Carla M.D.S. Freitas',
            abstract: 'In many real life situations, people work together using each their own computers. In practice, besides personal communication, such situations often involve exchanging documents and other digital objects. Since people are working in a common physical space, it is a natural idea to enlarge the virtual space to a common area where they can exchange objects while taking advantage of the collaborators\' physical proximity.In this work we propose a way to allow collaboration through the interaction with objects in a common virtual workspace built on the top of tablet PCs.The concepts of dynamic multiple displays and real world position tracking are implemented exploiting the tablet\'s embodied resources such as webcam, touch-screen and stylus. Also, a multiplayer game was implemented to show how users can exchange information through intercommunicating tablets. We performed user tests to demonstrate the feasibility of collaborative tasks in such environment, and drawn conslusions regarding the impact of the new paradigm of extended multi-user workspaces.',
            paper: '3dmanipulation/TabletSAC10.pdf',
            tags: ['VR & AR', 'Mobile', 'Multi-displays'],
            video: '3dmanipulation/TabletSAC10.mp4'
        },
        {
            title: 'Permeating the Architectural Past in Dante Alighieri Square in Caxias do Sul through Augmented Reality',
            venue: 'SIBGRAPI 2010',
            authors: 'RIBOLDI, G., MACIEL, A.',
            abstract: 'Important buildings and urban sites of the recent past were not adequately documented and have been forgotten for a long time. In this context, new experiences with the 3D modeling and simulation of such spaces in VR are becoming very impactful as documentation tools. However, these virtual spaces are not accessible to the general public as visualization tools are not available. The purpose of this work, then, is to create an interaction environment in augmented reality to explore historical areas in such a way that ancient versions of buildings can be visualized and explored directly in the real space where the buildings were in the past or their current versions are situated today. Users handling a mobile display device, as a tablet PC, walk around the real site, and as they point the display towards a neighboring building, they can see how it was in the past, which allows a travel in time, offering a fourth dimension to the experience. The results obtained demonstrate the potential of augmented reality applications for the dissemination of historical heritage.',
            paper: '3dmanipulation/ARchitectural_pastSIBGRAPI10.pdf',
            tags: ['VR & AR', 'Mobile'],
            video: '3dmanipulation/ARsightseeingSVR10.mp4'
        },
        {
            title: 'An Interactive Dynamic Tiled Display System',
            venue: 'SIBGRAPI 2010',
            authors: 'Juliano Franz, Gelson Reinaldo, Anderson Maciel and Luciana Nedel',
            abstract: 'Data acquisition devices and algorithms are generating each day larger datasets. As displays are not evolving in the same velocity, the use of tiled displays systems is being seriously considered for the visualization of huge datasets. However, tiled-displays are expensive and large, requiring dedicated rooms for it. Therefore we propose a low cost and scalable tiled display using an array of movable tablet PCs. We also present a strategy to interact with applications running on this dynamic tiled display system, which can be operated by one or multiple users concurrently. Our solution is based on two principles: even if each tile is a separate computer, users should feel it as an unique application running on a single machine; interaction is provided by sketching gestures directly over the displays surfaces using the tablet stylus. Users may use the system in a natural way, as they are just taking notes in their own scrapbook. Preliminary results are presented and discussed.',
            paper: '3dmanipulation/sibwuw2010b.pdf',
            tags: ['VR & AR', 'Mobile', 'Multi-displays'],
            image: 'sibwuw2010b.jpg'
        },
        {
            title: 'WindWalker: UsingWind as an Orientation Tool in Virtual Environments',
            venue: 'SVR 2009',
            authors: 'Henrique G. Debarba, Jerônimo G. Grandi, Adriano Oliveski, Diana Domingues, Anderson Maciel and Luciana P. Nedel',
            abstract: 'Trans-sensory perception is the alternative use of one of our senses to perceive information which is generally perceived by another sense. Common examples exist among handicapped people, such as blind people who play soccer based on sound emitters placed on the ball and at the goals. The present study aims at using wind as an interface modality for interaction in virtual environments. More than that, in this study we propose to use the direction of the air in motion as an abstraction of the natural sense humans have from the wind. We give a new meaning to the wind direction with the purpose of self-orientation in virtual reality environments. We develop hardware and software interfaces for wind rendering and then analyze user performance on specific orientation tasks.',
            paper: 'other/windwalker.pdf',
            tags: ['VR & AR', 'Multimodal'],
            video: 'other/windwalker.mp4'
        },
        {
            title: 'A Dynamic Multi-display System Approach',
            venue: 'SVR 2008',
            authors: 'Gelson C. Reinaldo, Marilena Maule, Márcio Zacarias, Anderson Maciel, Carla M.D.S. Freitas, Luciana P. Nedel',
            abstract: 'Techniques for construction and configuration of tiled display systems have been focused by a number of research groups. Arrays of monitors or projectors in a fixed size matrix NxM can be managed by computer clusters to display a single image with large dimensions and high resolution. In the present work, an array of tablet PCs is used to compose a tiled display with a specific interaction feature due to the mobility of each individual tablet. Tracking ground fixed markers with the tablets web cameras enable the system to change the virtual image region to be displayed by each tile, which allows dynamic exploration of the visualization space.',
            paper: '3dmanipulation/svr-tablet-ing.pdf',
            tags: ['VR & AR', 'Mobile', 'Multi-displays'],
            video: '3dmanipulation/svr-tablet-ing.mp4'
        }
    ];