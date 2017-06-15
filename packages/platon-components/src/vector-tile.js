import React from 'react';
import {Image, Text, View} from 'react-primitives';
import {Tile} from './tile';

const SPACE_IMAGE = 'https://upload.wikimedia.org/wikipedia/de/archive/5/54/20080903102003%21SchraffurLeer.png';

export const VectorTile = props => {
  const vertical = (props.vectorOrigin === 'bottom' || props.vectorOrigin === 'top');
  return (
    <Tile
      size={props.size}
      width={props.width}
      height={props.height}
      margin={props.margin}
      name={`${VectorTile.displayName} "${props.name}"`}
      headline={props.vectorName}
      subline={props.vectorValue}
      >
      {
        props.vectorDirection === 'outside' ?
          <Vector
            length={props.distanceValue}
            name={props.distanceName}
            origin={props.vectorOrigin}
            /> :
          <Padding
            length={props.distanceValue}
            name={props.distanceName}
            origin={props.vectorOrigin}
            vertical={vertical}
            horizontal={!vertical}
            />
      }
    </Tile>
  );
};

VectorTile.displayName = 'Vector Tile';

function Padding(props) {
  const size = Math.max(150, props.length + 100);

  return (
    <View
      style={{
        alignItems: 'center'
      }}
      >
      <Element
        width={props.horizontal ? size : 150}
        height={props.vertical ? size : 150}
        >
        <View
          style={[
            {
              position: 'absolute',
              display: 'flex',
              alignItems: 'center'
            },
            props.origin === 'top' && {
              top: 0,
              flexDirection: 'column'
            },
            props.origin === 'right' && {
              right: 1,
              flexDirection: 'row-reverse'
            },
            props.origin === 'bottom' && {
              bottom: 1,
              flexDirection: 'column-reverse'
            },
            props.origin === 'left' && {
              left: 0,
              flexDirection: 'row'
            }
          ]}
          >
          <Image
            source={SPACE_IMAGE}
            resizeMode="repeat"
            style={[
              {
                display: 'flex',
                alignItems: 'center',
                height: props.vertical ? props.length : 148,
                width: props.horizontal ? props.length : 148,
                opacity: 0.5
              },
              props.origin === 'top' && {
                top: 0,
                borderBottomWidth: 1,
                borderBottomColor: '#000',
                borderBottomStyle: 'solid'
              },
              props.origin === 'right' && {
                right: 1,
                borderLeftWidth: 1,
                borderLeftColor: '#000',
                borderLeftStyle: 'solid'
              },
              props.origin === 'bottom' && {
                bottom: 1,
                borderTopWidth: 1,
                borderTopColor: '#000',
                borderTopStyle: 'solid'
              },
              props.origin === 'left' && {
                left: 0,
                borderRightWidth: 1,
                borderRightColor: '#000',
                borderRightStyle: 'solid'
              }
            ]}
            />
          <VectorLabel origin={props.origin} invert>
            {props.name}
          </VectorLabel>
        </View>
      </Element>
    </View>
  );
}

Padding.displayName = 'Padding';

function Vector(props) {
  const vertical = props.origin === 'top' || props.origin === 'bottom';

  return (
    <View
      name="Vector"
      style={[
        {
          display: 'flex',
          alignItems: 'center'
        },
        props.origin === 'top' && {
          flexDirection: 'column'
        },
        props.origin === 'right' && {
          flexDirection: 'row-reverse'
        },
        props.origin === 'bottom' && {
          flexDirection: 'column-reverse'
        },
        props.origin === 'left' && {
          flexDirection: 'row'
        }
      ]}
      >
      <View
        style={[
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
          },
          props.origin === 'top' && {
            flexDirection: 'column-reverse'
          },
          props.origin === 'right' && {
            flexDirection: 'row'
          },
          props.origin === 'bottom' && {
            flexDirection: 'column'
          },
          props.origin === 'left' && {
            flexDirection: 'row-reverse'
          }
        ]}
        >
        <VectorSpace
          origin={props.origin}
          size={props.length}
          />
        <VectorLabel origin={props.origin}>
          {props.name}
        </VectorLabel>
      </View>
      <Element
        width={vertical ? 150 : 50}
        height={vertical ? 50 : 150}
        origin={props.origin}
        />
    </View>
  );
}

function VectorLabel(props) {
  const arrow = getArrow(props.origin, props.invert);
  return (
    <View
      name={`Vector Label ${props.children}`}
      style={{
        backgroundColor: '#222',
        width: 50
      }}
      >
      <Text
        style={{
          fontSize: 12,
          lineHeight: 16,
          color: '#fff',
          textAlign: 'center',
          paddingTop: 5,
          paddingBottom: 5
        }}
        >
        {`${arrow} ${props.children}`}
      </Text>
    </View>
  );
}

VectorLabel.displayName = 'VectorLabel';

function getArrow(origin, invert = false) {
  switch (origin) {
    case 'top':
      return invert ? '⤓' : '⤒';
    case 'right':
      return invert ? '⇤' : '⇥';
    case 'left':
      return invert ? '⇥' : '⇤';
    case 'bottom':
    default:
      return invert ? '⤒' : '⤓';
  }
}

function VectorSpace(props) {
  const vertical = (props.origin === 'top' || props.origin === 'bottom');

  const size = vertical ?
  {
    width: 150,
    height: props.size
  } :
  {
    width: props.size,
    height: 150
  };

  const imageSize = {
    width: size.width - (vertical ? 0 : 1),
    height: size.height - (vertical ? 1 : 0)
  };

  return (
    <View
      name={`Vector Space ${props.distanceValue}`}
      style={[
        {
          backgroundColor: '#fff'
        },
        size,
        props.origin === 'top' && {
          borderTopWidth: 1,
          borderTopColor: '#000',
          borderTopStyle: 'solid'
        },
        props.origin === 'right' && {
          borderRightWidth: 1,
          borderRightColor: '#000',
          borderRightStyle: 'solid'
        },
        props.origin === 'bottom' && {
          borderBottomWidth: 1,
          borderBottomColor: '#000',
          borderBottomStyle: 'solid'
        },
        props.origin === 'left' && {
          borderLeftWidth: 1,
          borderLeftColor: '#000',
          borderLeftStyle: 'solid'
        }
      ]}
      >
      <Image
        source={SPACE_IMAGE}
        resizeMode="repeat"
        style={[imageSize, {opacity: 0.5}]}
        />
    </View>
  );
}

VectorSpace.displayName = 'VectorSpace';

function Element(props) {
  return (
    <View
      name="Element Container"
      style={{
        position: 'relative',
        padding: 0,
        width: props.width,
        height: props.height
      }}
      >
      <View
        name="Element"
        style={[
          {
            backgroundColor: '#fff',
            borderStyle: 'solid',
            borderColor: '#000000',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowRadius: 5,
            width: props.width,
            height: props.height
          },
          props.origin === 'top' && {
            shadowOffset: {
              width: 0,
              height: -2
            }
          },
          props.origin === 'right' && {
            shadowOffset: {
              width: 2,
              height: 0
            }
          },
          props.origin === 'bottom' && {
            shadowOffset: {
              width: 0,
              height: 2
            }
          },
          props.origin === 'left' && {
            shadowOffset: {
              width: -2,
              height: 0
            }
          }
        ]}
        >
        {props.children}
      </View>
      <ElementCorner top right/>
      <ElementCorner bottom right/>
      <ElementCorner bottom left/>
      <ElementCorner top left/>
    </View>
  );
}

Element.displayName = 'Element';

function ElementCorner(props) {
  return (
    <View
      name={'Element corner'}
      style={[
        {
          backgroundColor: '#fff',
          borderStyle: 'solid',
          borderColor: '#000000',
          borderWidth: 1,
          width: 5,
          height: 5,
          position: 'absolute'
        },
        props.left && {
          left: -2
        },
        props.right && {
          right: -2
        },
        props.top && {
          top: -2
        },
        props.bottom && {
          bottom: -2
        }
      ]}
      />
  );
}

ElementCorner.displayName = 'ElementCorner';
