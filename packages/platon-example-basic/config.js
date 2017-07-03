export default {
  colors: {
    name: 'Colors',
    tokens: [
      {
        name: 'Red',
        description: '#bc0021',
        value: '#bc0021'
      }
    ]
  },
  fonts: {
    name: 'Fonts',
    tokens: [
      {
        name: 'HNB',
        value: {
          weight: 'Bold',
          family: 'HelveticaNeue-Bold'
        }
      }
    ]
  },
  texts: {
    name: 'Text Styles',
    tokens: [
      {
        name: 'huge',
        value: {
          color: {
            value: '#bc0021',
            name: 'Red'
          },
          fontFamily: {
            value: 'HelveticaNeue-Bold',
            name: 'HNB'
          },
          fontSize: {
            value: 90,
            name: 'Text XXL'
          },
          lineHeight: {
            value: 90,
            name: 'Text XLL'
          },
          textAlign: 'center'
        }
      }
    ]
  },
  sizes: {
    name: 'Sizes',
    tokens: [
      {
        name: 'Text Sizes',
        value: [
          {
            name: 'Text L',
            value: 30
          },
          {
            name: 'Text XL',
            value: 60
          },
          {
            name: 'Text XXL',
            value: 90
          }
        ]
      }
    ]
  }
};
