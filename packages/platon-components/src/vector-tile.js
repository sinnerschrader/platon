import React from 'react';
import {Image, Text, View} from 'react-primitives';
import {descriptionStyles, headlineStyles, sublineStyles} from './color-tile';

const TILE_STAGE_PADDING = 20;
const TILE_DESCRIPTION_HEIGHT = 50;
const VECTOR_LABEL_HEIGHT = 25;
const ELEMENT_DIMESION = 50;
const SPACE_IMAGE = 'https://upload.wikimedia.org/wikipedia/de/archive/5/54/20080903102003%21SchraffurLeer.png';

export const VectorTile = props => {
  return (
    <View
      name={`${VectorTile.displayName} "${props.name}"`}
      style={[
        {
          backgroundColor: '#f2f2f2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          margin: props.margin
        },
        (props.vectorOrigin === 'bottom' || props.vectorOrigin === 'top') && {
          height: Math.max(props.size, props.distanceValue + ELEMENT_DIMESION + VECTOR_LABEL_HEIGHT + TILE_DESCRIPTION_HEIGHT + (TILE_STAGE_PADDING * 2)),
          width: props.size
        },
        (props.vectorOrigin === 'right' || props.vectorOrigin === 'left') && {
          width: Math.max(props.size, props.distanceValue + ELEMENT_DIMESION + VECTOR_LABEL_HEIGHT + TILE_DESCRIPTION_HEIGHT + (TILE_STAGE_PADDING * 2)),
          height: props.size
        },
        props.style
      ]}
      >
      <TileStage
        length={props.distanceValue}
        origin={props.vectorOrigin}
        >
        <Vector
          length={props.distanceValue}
          name={props.distanceName}
          origin={props.vectorOrigin}
          direction={props.vectorDirection}
          />
      </TileStage>
      <TileDescription
        headline={props.vectorName}
        subline={props.vectorValue}
        />
    </View>
  );
};

VectorTile.displayName = 'Vector Tile';

function Vector(props) {
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
      <Element origin={props.origin}/>
    </View>
  );
}

function VectorLabel(props) {
  const arrow = getArrow(props.origin);
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

function getArrow(origin) {
  switch (origin) {
    case 'top':
      return '⤒';
    case 'right':
      return '⇥';
    case 'left':
      return '⇤';
    case 'bottom':
    default:
      return '⤓';
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
        padding: 0,
        position: 'relative'
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
            shadowRadius: 5
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
          },
          (props.origin === 'top' || props.origin === 'bottom') && {
            width: 150,
            height: 50
          },
          (props.origin === 'right' || props.origin === 'left') && {
            width: 50,
            height: 150
          }
        ]}
        />
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

function TileDescription(props) {
  return (
    <View
      style={descriptionStyles}
      >
      <Text style={headlineStyles}>
        {props.headline}
      </Text>
      <Text style={sublineStyles}>
        {props.subline}
      </Text>
    </View>
  );
}

TileDescription.displayName = 'TileDescription';

function TileStage(props) {
  const vertical = props.origin === 'right' || props.origin === 'left';

  return (
    <View
      name={'Tile Stage'}
      style={[
        {
          display: 'flex',
          padding: TILE_STAGE_PADDING
        },
        {
          paddingTop: (Math.max(250, props.length + (20 * 2) + 74) / 2) - ((54 + 26 + props.length) / 2)
        },
        vertical && {
          paddingTop: (250 / 2) - (150 / 2),
          alignItems: 'center',
          justifyContent: 'center'
        }
      ]}
      >
      <View>
        {props.children}
      </View>
    </View>
  );
}

TileStage.displayName = 'TileStage';
