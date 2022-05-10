import MOCK_DATA from 'data/keo-seima-mock.json'

export enum SECTION_NAME {
  MEDIA = 'media',
  INTERVENTION_MODEL = 'intervention-model',
  IMPACT = 'impact',
}

export const IMPACT_TABS = [
  {
    title: 'Community',
    sections: [
      {
        title: 'Health',
        subtitle: 'More than 12,000 students served in project supported schools',
        description: `In total, 1,501 women participated in project activities, and benefited from
      improvements to access to education and health care. (Project activities will be
      designed in a way that encourages the participation of women; moreover, all management
      and leadership committees will contain at least one woman, with an aim of
      transitioning to equal representation over time.`,
        imageName: 'impact-community',
      },
      {
        title: 'Economy',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
        imageName: 'impact-community',
      },
      {
        title: 'Education',
        subtitle: 'Dolor sit amet, consectetur adipiscing elit',
        description: `Ipsum dolor sit amet, consectetur adipiscing elit`,
        imageName: 'impact-community',
      },
      {
        title: 'Women’s Empowerment',
        subtitle: 'Students served in project supported',
        description: `usce iaculis ante id velit fringilla, sed sagittis orci ullamcorper. Mauris pretium,
        velit vitae imperdiet sodales, magna nibh tristique neque, a malesuada orci diam et
        ante. Vestibulum ornare tristique felis, ut suscipit ex fringilla non. Nullam a
        tincidunt mauris.`,
        imageName: 'impact-community',
      },
    ],
  },
  {
    title: 'Governance',
    sections: [
      {
        title: 'Forest Governance',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description: `usce iaculis ante id velit fringilla, sed sagittis orci ullamcorper. Mauris pretium,
        velit vitae imperdiet sodales, magna nibh tristique neque, a malesuada orci diam et
        ante. Vestibulum ornare tristique felis, ut suscipit ex fringilla non. Nullam a
        tincidunt mauris.usce iaculis ante id velit fringilla, sed sagittis orci ullamcorper.
        Mauris pretium, velit vitae imperdiet sodales, magna nibh tristique neque, a malesuada
        orci diam et ante. Vestibulum ornare tristique felis, ut suscipit ex fringilla non.
        Nullam a tincidunt mauris.`,
        imageName: 'impact-governance',
      },
      {
        title: 'Community Benefits Sharing',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description: `usce iaculis ante id velit fringilla, sed sagittis orci ullamcorper. Mauris pretium,
        velit vitae imperdiet sodales, magna nibh tristique neque, a malesuada orci diam et
        ante. Vestibulum ornare tristique felis, ut suscipit ex fringilla non. Nullam a
        tincidunt mauris.usce iaculis ante id velit fringilla, sed sagittis orci ullamcorper.
        Mauris pretium, velit vitae imperdiet sodales, magna nibh tristique neque, a malesuada
        orci diam et ante. Vestibulum ornare tristique felis, ut suscipit ex fringilla non.
        Nullam a tincidunt mauris.`,
        imageName: 'impact-governance',
      },
    ],
  },
  // {
  //   title: 'Biodiversity',
  //   subtitle: '20,000 People experiencing improved livelihoods',
  //   description: `5,827 community members engaged in productive activities or employment in micro-,
  //   small- and medium-sized enterprises, and gaining improved livelihoods or income as a
  //   result, as a result of project activities (I aquí si quieres podemos inventar una
  //   historieta de una enterprise de ecocharcoal).`,
  // },
  // {
  //   title: 'Climate',
  //   subtitle: 'From 2010 to 2020, Keo Seima lost 224kha of humid primary forest.',
  //   description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel vero nemo repudiandae
  //   quo modi exercitationem iure saepe nam adipisci dolores, fugit, magnam iste a,
  //   consequatur nobis iusto doloribus libero mollitia!`,
  // },
]

export const INTERVENTION_MODEL_TABS = [
  {
    title: 'Origins',
    description: `Illegal land clearance is currently KSWS’s greatest threat. Driven by expansion of cash crops and land speculation, KSWS sits at the frontier of a wave of deforestation that has swept through an adjacent, unsupported protected area. Illegal hunting with guns, dogs, and snares is also a direct threat to wildlife species, and illegal targeted logging of valuable timber threatens rare tree species and causes community conflict.`,
    imageName: 'intervention-model-1',
  },
  {
    title: 'Threats',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    imageName: 'intervention-model-2',
  },
  {
    title: 'Solutions',
    subtitle: '20,000 People experiencing improved livelihoods',
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)`,
  },
  {
    title: 'Progress',
    subtitle: 'From 2010 to 2020, Keo Seima lost 224kha of humid primary forest.',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel vero nemo repudiandae
    quo modi exercitationem iure saepe nam adipisci dolores, fugit, magnam iste a,
    consequatur nobis iusto doloribus libero mollitia!`,
    imageName: 'intervention-model-2',
  },
]

export const NAV_SECTIONS = [
  { name: SECTION_NAME.MEDIA, label: 'Media' },
  { name: SECTION_NAME.INTERVENTION_MODEL, label: 'Intervention model' },
  { name: SECTION_NAME.IMPACT, label: 'Impact' },
]

export const data = MOCK_DATA
