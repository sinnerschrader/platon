export default {
  colors: {
    name: 'S2 Colors',
    tokens: [
      {
        name: 'S2 BLUE',
        description: 'Primary color',
        value: '#4502DA'
      },
      {
        name: 'S2 RED',
        value: '#FF0354'
      },
      {
        name: 'S2 GREEN',
        value: '#03FFB7'
      },
      {
        name: 'S2 BLACK',
        value: '#1E212A'
      },
      {
        name: 'S2 GREY',
        value: '#E8ECEF'
      },
      {
        name: 'S2 WHITE',
        value: '#ffffff'
      }
    ]
  },
  sizes: {
    name: 'S2 Sizes',
    tokens: [
      {
        name: '320',
        description: 'Size variables in Viewports <= 320',
        value: [
          {
            name: 'XXS',
            value: 3
          },
          {
            name: 'XS',
            value: 6
          },
          {
            name: 'S',
            value: 12
          },
          {
            name: 'M',
            value: 18
          },
          {
            name: 'L',
            value: 24
          },
          {
            name: 'XL',
            value: 30
          },
          {
            name: 'XXL',
            value: 36
          },
          {
            name: '3XL',
            value: 42
          }
        ]
      }
    ]
  },
  fonts: {
    name: 'S2 Fonts',
    tokens: [
      {
        name: 'Maison',
        description: 'Some Font',
        value: {
          weight: 'Regular',
          family: 'Maison-Regular'
        }
      },
      {
        name: 'Maison',
        value: {
          weight: 'Bold',
          family: 'Maison-Bold'
        }
      },
      {
        name: 'Maison',
        value: {
          weight: 'Light',
          family: 'Maison-Light'
        }
      },
      {
        name: 'Maison',
        value: {
          weight: 'Italic',
          family: 'Maison-Italic'
        }
      },
      {
        name: 'Maison Mono',
        value: {
          weight: 'Regular',
          family: 'MaisonMono-Regular',
          fontSize: 25
        }
      },
      {
        name: 'Maison Mono',
        value: {
          weight: 'Bold',
          family: 'MaisonMono-Bold',
          fontSize: 25
        }
      },
      {
        name: 'Maison Mono',
        value: {
          weight: 'Light',
          family: 'MaisonMono-Light',
          fontSize: 25
        }
      },
      {
        name: 'Maison Mono',
        value: {
          weight: 'Italic',
          family: 'MaisonMono-Italic',
          fontSize: 25
        }
      },
      {
        name: 'Noe',
        value: {
          weight: 'Regular',
          family: 'NoeText-Regular'
        }
      }
    ]
  },
  spaces: {
    name: 'S2 Spaces',
    tokens: [
      {
        name: 'All Margin M',
        description: 'Primary outer spacing',
        value: {
          direction: 'outside',
          top: {
            name: 'M',
            value: 18
          },
          right: {
            name: 'M',
            value: 18
          },
          bottom: {
            name: 'M',
            value: 18
          },
          left: {
            name: 'M',
            value: 18
          }
        }
      },
      {
        name: 'Dented',
        value: {
          direction: 'inside',
          top: 18,
          right: 18,
          bottom: 18,
          left: {
            name: 'XL',
            value: 36
          }
        }
      },
      {
        name: 'Horizontal Padding M',
        value: {
          direction: 'inside',
          right: {
            name: 'M',
            value: 18
          },
          left: {
            name: 'M',
            value: 18
          }
        }
      },
      {
        name: 'Horizontal Margin M',
        value: {
          direction: 'outside',
          right: {
            name: 'M',
            value: 18
          },
          left: {
            name: 'M',
            value: 18
          }
        }
      }
    ]
  },
  texts: {
    name: 'S2 Text Styles',
    tokens: [
      {
        name: 'Headline 1',
        description: 'Text style for primary headlines on any page',
        value: {
          fontFamily: 'Maison-Bold',
          fontSize: 90,
          lineHeight: 90,
          textAlign: 'center'
        }
      },
      {
        name: 'Headline 2',
        value: {
          fontFamily: 'Maison-Bold',
          fontSize: 48,
          lineHeight: 68,
          letterSpacing: 1
        }
      },
      {
        name: 'Headline 2 serif',
        value: {
          fontFamily: 'NoeText-Regular',
          fontSize: 32,
          lineHeight: 40,
          textAlign: 'left'
        }
      }
    ]
  },
  vectors: {
    name: 'S2 Vectors',
    tokens: [
      {
        name: 'Top M',
        description: 'May have a description',
        value: {
          length: {
            name: 'M',
            value: 50
          },
          origin: 'top',
          direction: 'outside'
        }
      },
      {
        name: 'Right M',
        value: {
          length: 50,
          origin: 'right',
          direction: 'outside'
        }
      },
      {
        name: 'Bottom M',
        value: {
          length: 50,
          origin: 'bottom',
          direction: 'outside'
        }
      },
      {
        name: 'Left M',
        value: {
          length: 50,
          origin: 'left',
          direction: 'outside'
        }
      },
      {
        name: 'Right L',
        value: {
          length: 300,
          origin: 'right',
          direction: 'outside'
        }
      },
      {
        name: 'Left L',
        value: {
          length: 300,
          origin: 'left',
          direction: 'outside'
        }
      },
      {
        name: 'Top L',
        value: {
          length: 300,
          origin: 'top',
          direction: 'outside'
        }
      },
      {
        name: 'Bottom L',
        value: {
          length: 300,
          origin: 'bottom',
          direction: 'outside'
        }
      },
      {
        name: 'Top M',
        value: {
          length: 50,
          origin: 'top',
          direction: 'inside'
        }
      },
      {
        name: 'Right M',
        value: {
          length: 50,
          origin: 'right',
          direction: 'inside'
        }
      },
      {
        name: 'Bottom M',
        value: {
          lengthName: 'M',
          length: 50,
          origin: 'bottom',
          direction: 'inside'
        }
      },
      {
        name: 'Left M',
        value: {
          length: 50,
          origin: 'left',
          direction: 'inside'
        }
      },
      {
        name: 'Top L',
        value: {
          length: 300,
          origin: 'top',
          direction: 'inside'
        }
      },
      {
        name: 'Bottom L',
        value: {
          length: 300,
          origin: 'bottom',
          direction: 'inside'
        }
      },
      {
        name: 'Right L',
        value: {
          length: 300,
          origin: 'right',
          direction: 'inside'
        }
      },
      {
        name: 'Left L',
        value: {
          length: 300,
          origin: 'left',
          direction: 'inside'
        }
      }
    ]
  }
};
