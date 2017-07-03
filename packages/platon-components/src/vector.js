import React from 'react';
import {Image, View} from 'react-primitives';
import {Element} from './element';
import {Label} from './label';
import {Tile} from './tile';

const SPACE_IMAGE = 'https://upload.wikimedia.org/wikipedia/de/archive/5/54/20080903102003%21SchraffurLeer.png';

export const Vector = props => {
  const vertical = (props.origin === 'bottom' || props.origin === 'top');
  return (
    <Tile
      size={props.size}
      width={props.width}
      height={props.height}
      margin={props.margin}
      name={`${Vector.displayName} "${props.name}"`}
      headline={props.name}
      subline={props.description}
      >
      {
        props.direction === 'outside' ?
          <VectorSymbol
            length={props.length}
            name={props.lengthName}
            origin={props.origin}
            /> :
          <Padding
            length={props.length}
            name={props.lengthName}
            origin={props.origin}
            vertical={vertical}
            horizontal={!vertical}
            />
      }
    </Tile>
  );
};

Vector.displayName = 'Vector';

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
          <Label origin={props.origin} invert>
            {props.name}
          </Label>
        </View>
      </Element>
    </View>
  );
}

Padding.displayName = 'Padding';

function VectorSymbol(props) {
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
        <Label origin={props.origin}>
          {props.name}
        </Label>
      </View>
      <Element
        width={vertical ? 150 : 50}
        height={vertical ? 50 : 150}
        origin={props.origin}
        />
    </View>
  );
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
