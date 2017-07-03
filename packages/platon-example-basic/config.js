const HNB = {
  name: 'HNB',
  value: 'HelveticaNeue-Bold'
};

export default {
  fonts: {
    name: 'Fonts',
    tokens: [
      {
        ...HNB,
        description: `
          Helvetica Neue
          Bold
        `
      }
    ]
  },
  texts: {
    name: 'Text Styles',
    tokens: [
      {
        name: 'huge',
        value: {
          fontFamily: HNB,
          fontSize: 60
        }
      }
    ]
  }
};
