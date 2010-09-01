/**
 * @fileoverview 
 * Common constants and variables used in the RTE test suite.
 *
 * Copyright 2010 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License')
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @version 0.1
 * @author rolandsteiner@google.com
 */

// All colors defined in CSS3.
var colorChart = {
  'aliceblue': {red: 0xF0, green: 0xF8, blue: 0xFF},
  'antiquewhite': {red: 0xFA, green: 0xEB, blue: 0xD7},
  'aqua': {red: 0x00, green: 0xFF, blue: 0xFF},
  'aquamarine': {red: 0x7F, green: 0xFF, blue: 0xD4},
  'azure': {red: 0xF0, green: 0xFF, blue: 0xFF},
  'beige': {red: 0xF5, green: 0xF5, blue: 0xDC},
  'bisque': {red: 0xFF, green: 0xE4, blue: 0xC4},
  'black': {red: 0x00, green: 0x00, blue: 0x00},
  'blanchedalmond': {red: 0xFF, green: 0xEB, blue: 0xCD},
  'blue': {red: 0x00, green: 0x00, blue: 0xFF},
  'blueviolet': {red: 0x8A, green: 0x2B, blue: 0xE2},
  'brown': {red: 0xA5, green: 0x2A, blue: 0x2A},
  'burlywood': {red: 0xDE, green: 0xB8, blue: 0x87},
  'cadetblue': {red: 0x5F, green: 0x9E, blue: 0xA0},
  'chartreuse': {red: 0x7F, green: 0xFF, blue: 0x00},
  'chocolate': {red: 0xD2, green: 0x69, blue: 0x1E},
  'coral': {red: 0xFF, green: 0x7F, blue: 0x50},
  'cornflowerblue': {red: 0x64, green: 0x95, blue: 0xED},
  'cornsilk': {red: 0xFF, green: 0xF8, blue: 0xDC},
  'crimson': {red: 0xDC, green: 0x14, blue: 0x3C},
  'cyan': {red: 0x00, green: 0xFF, blue: 0xFF},
  'darkblue': {red: 0x00, green: 0x00, blue: 0x8B},
  'darkcyan': {red: 0x00, green: 0x8B, blue: 0x8B},
  'darkgoldenrod': {red: 0xB8, green: 0x86, blue: 0x0B},
  'darkgray': {red: 0xA9, green: 0xA9, blue: 0xA9},
  'darkgreen': {red: 0x00, green: 0x64, blue: 0x00},
  'darkgrey': {red: 0xA9, green: 0xA9, blue: 0xA9},
  'darkkhaki': {red: 0xBD, green: 0xB7, blue: 0x6B},
  'darkmagenta': {red: 0x8B, green: 0x00, blue: 0x8B},
  'darkolivegreen': {red: 0x55, green: 0x6B, blue: 0x2F},
  'darkorange': {red: 0xFF, green: 0x8C, blue: 0x00},
  'darkorchid': {red: 0x99, green: 0x32, blue: 0xCC},
  'darkred': {red: 0x8B, green: 0x00, blue: 0x00},
  'darksalmon': {red: 0xE9, green: 0x96, blue: 0x7A},
  'darkseagreen': {red: 0x8F, green: 0xBC, blue: 0x8F},
  'darkslateblue': {red: 0x48, green: 0x3D, blue: 0x8B},
  'darkslategray': {red: 0x2F, green: 0x4F, blue: 0x4F},
  'darkslategrey': {red: 0x2F, green: 0x4F, blue: 0x4F},
  'darkturquoise': {red: 0x00, green: 0xCE, blue: 0xD1},
  'darkviolet': {red: 0x94, green: 0x00, blue: 0xD3},
  'deeppink': {red: 0xFF, green: 0x14, blue: 0x93},
  'deepskyblue': {red: 0x00, green: 0xBF, blue: 0xFF},
  'dimgray': {red: 0x69, green: 0x69, blue: 0x69},
  'dimgrey': {red: 0x69, green: 0x69, blue: 0x69},
  'dodgerblue': {red: 0x1E, green: 0x90, blue: 0xFF},
  'firebrick': {red: 0xB2, green: 0x22, blue: 0x22},
  'floralwhite': {red: 0xFF, green: 0xFA, blue: 0xF0},
  'forestgreen': {red: 0x22, green: 0x8B, blue: 0x22},
  'fuchsia': {red: 0xFF, green: 0x00, blue: 0xFF},
  'gainsboro': {red: 0xDC, green: 0xDC, blue: 0xDC},
  'ghostwhite': {red: 0xF8, green: 0xF8, blue: 0xFF},
  'gold': {red: 0xFF, green: 0xD7, blue: 0x00},
  'goldenrod': {red: 0xDA, green: 0xA5, blue: 0x20},
  'gray': {red: 0x80, green: 0x80, blue: 0x80},
  'green': {red: 0x00, green: 0x80, blue: 0x00},
  'greenyellow': {red: 0xAD, green: 0xFF, blue: 0x2F},
  'grey': {red: 0x80, green: 0x80, blue: 0x80},
  'honeydew': {red: 0xF0, green: 0xFF, blue: 0xF0},
  'hotpink': {red: 0xFF, green: 0x69, blue: 0xB4},
  'indianred': {red: 0xCD, green: 0x5C, blue: 0x5C},
  'indigo': {red: 0x4B, green: 0x00, blue: 0x82},
  'ivory': {red: 0xFF, green: 0xFF, blue: 0xF0},
  'khaki': {red: 0xF0, green: 0xE6, blue: 0x8C},
  'lavender': {red: 0xE6, green: 0xE6, blue: 0xFA},
  'lavenderblush': {red: 0xFF, green: 0xF0, blue: 0xF5},
  'lawngreen': {red: 0x7C, green: 0xFC, blue: 0x00},
  'lemonchiffon': {red: 0xFF, green: 0xFA, blue: 0xCD},
  'lightblue': {red: 0xAD, green: 0xD8, blue: 0xE6},
  'lightcoral': {red: 0xF0, green: 0x80, blue: 0x80},
  'lightcyan': {red: 0xE0, green: 0xFF, blue: 0xFF},
  'lightgoldenrodyellow': {red: 0xFA, green: 0xFA, blue: 0xD2},
  'lightgray': {red: 0xD3, green: 0xD3, blue: 0xD3},
  'lightgreen': {red: 0x90, green: 0xEE, blue: 0x90},
  'lightgrey': {red: 0xD3, green: 0xD3, blue: 0xD3},
  'lightpink': {red: 0xFF, green: 0xB6, blue: 0xC1},
  'lightsalmon': {red: 0xFF, green: 0xA0, blue: 0x7A},
  'lightseagreen': {red: 0x20, green: 0xB2, blue: 0xAA},
  'lightskyblue': {red: 0x87, green: 0xCE, blue: 0xFA},
  'lightslategray': {red: 0x77, green: 0x88, blue: 0x99},
  'lightslategrey': {red: 0x77, green: 0x88, blue: 0x99},
  'lightsteelblue': {red: 0xB0, green: 0xC4, blue: 0xDE},
  'lightyellow': {red: 0xFF, green: 0xFF, blue: 0xE0},
  'lime': {red: 0x00, green: 0xFF, blue: 0x00},
  'limegreen': {red: 0x32, green: 0xCD, blue: 0x32},
  'linen': {red: 0xFA, green: 0xF0, blue: 0xE6},
  'magenta': {red: 0xFF, green: 0x00, blue: 0xFF},
  'maroon': {red: 0x80, green: 0x00, blue: 0x00},
  'mediumaquamarine': {red: 0x66, green: 0xCD, blue: 0xAA},
  'mediumblue': {red: 0x00, green: 0x00, blue: 0xCD},
  'mediumorchid': {red: 0xBA, green: 0x55, blue: 0xD3},
  'mediumpurple': {red: 0x93, green: 0x70, blue: 0xDB},
  'mediumseagreen': {red: 0x3C, green: 0xB3, blue: 0x71},
  'mediumslateblue': {red: 0x7B, green: 0x68, blue: 0xEE},
  'mediumspringgreen': {red: 0x00, green: 0xFA, blue: 0x9A},
  'mediumturquoise': {red: 0x48, green: 0xD1, blue: 0xCC},
  'mediumvioletred': {red: 0xC7, green: 0x15, blue: 0x85},
  'midnightblue': {red: 0x19, green: 0x19, blue: 0x70},
  'mintcream': {red: 0xF5, green: 0xFF, blue: 0xFA},
  'mistyrose': {red: 0xFF, green: 0xE4, blue: 0xE1},
  'moccasin': {red: 0xFF, green: 0xE4, blue: 0xB5},
  'navajowhite': {red: 0xFF, green: 0xDE, blue: 0xAD},
  'navy': {red: 0x00, green: 0x00, blue: 0x80},
  'oldlace': {red: 0xFD, green: 0xF5, blue: 0xE6},
  'olive': {red: 0x80, green: 0x80, blue: 0x00},
  'olivedrab': {red: 0x6B, green: 0x8E, blue: 0x23},
  'orange': {red: 0xFF, green: 0xA5, blue: 0x00},
  'orangered': {red: 0xFF, green: 0x45, blue: 0x00},
  'orchid': {red: 0xDA, green: 0x70, blue: 0xD6},
  'palegoldenrod': {red: 0xEE, green: 0xE8, blue: 0xAA},
  'palegreen': {red: 0x98, green: 0xFB, blue: 0x98},
  'paleturquoise': {red: 0xAF, green: 0xEE, blue: 0xEE},
  'palevioletred': {red: 0xDB, green: 0x70, blue: 0x93},
  'papayawhip': {red: 0xFF, green: 0xEF, blue: 0xD5},
  'peachpuff': {red: 0xFF, green: 0xDA, blue: 0xB9},
  'peru': {red: 0xCD, green: 0x85, blue: 0x3F},
  'pink': {red: 0xFF, green: 0xC0, blue: 0xCB},
  'plum': {red: 0xDD, green: 0xA0, blue: 0xDD},
  'powderblue': {red: 0xB0, green: 0xE0, blue: 0xE6},
  'purple': {red: 0x80, green: 0x00, blue: 0x80},
  'red': {red: 0xFF, green: 0x00, blue: 0x00},
  'rosybrown': {red: 0xBC, green: 0x8F, blue: 0x8F},
  'royalblue': {red: 0x41, green: 0x69, blue: 0xE1},
  'saddlebrown': {red: 0x8B, green: 0x45, blue: 0x13},
  'salmon': {red: 0xFA, green: 0x80, blue: 0x72},
  'sandybrown': {red: 0xF4, green: 0xA4, blue: 0x60},
  'seagreen': {red: 0x2E, green: 0x8B, blue: 0x57},
  'seashell': {red: 0xFF, green: 0xF5, blue: 0xEE},
  'sienna': {red: 0xA0, green: 0x52, blue: 0x2D},
  'silver': {red: 0xC0, green: 0xC0, blue: 0xC0},
  'skyblue': {red: 0x87, green: 0xCE, blue: 0xEB},
  'slateblue': {red: 0x6A, green: 0x5A, blue: 0xCD},
  'slategray': {red: 0x70, green: 0x80, blue: 0x90},
  'slategrey': {red: 0x70, green: 0x80, blue: 0x90},
  'snow': {red: 0xFF, green: 0xFA, blue: 0xFA},
  'springgreen': {red: 0x00, green: 0xFF, blue: 0x7F},
  'steelblue': {red: 0x46, green: 0x82, blue: 0xB4},
  'tan': {red: 0xD2, green: 0xB4, blue: 0x8C},
  'teal': {red: 0x00, green: 0x80, blue: 0x80},
  'thistle': {red: 0xD8, green: 0xBF, blue: 0xD8},
  'tomato': {red: 0xFF, green: 0x63, blue: 0x47},
  'turquoise': {red: 0x40, green: 0xE0, blue: 0xD0},
  'violet': {red: 0xEE, green: 0x82, blue: 0xEE},
  'wheat': {red: 0xF5, green: 0xDE, blue: 0xB3},
  'white': {red: 0xFF, green: 0xFF, blue: 0xFF},
  'whitesmoke': {red: 0xF5, green: 0xF5, blue: 0xF5},
  'yellow': {red: 0xFF, green: 0xFF, blue: 0x00},
  'yellowgreen': {red: 0x9A, green: 0xCD, blue: 0x32}
};

/**
 * Color class allows cross-browser comparison of values, which can
 * be returned from queryCommandValue in several formats:
 *   #ff00ff
 *   #f0f
 *   rgb(255, 0, 0)
 *   Number containing the hex value
 *
 * @constructor
 * @param value {String} original value
 */
function Color(value) {
  this.compare = function(other) {
    if (!this.valid || !other.valid) {
      return false;
    }
    // TODO(rolandsteiner): handle alpha and hsl/hsla values
    return this.red == other.red && this.green == other.green && this.blue == other.blue;
  }
  this.parse = function(value) {
    var hex6Match = String(value).match(/#([0-9a-f]{6})/i);
    if (hex6Match) {
      this.red = parseInt(hex6Match[1].substring(0, 2), 16);
      this.green = parseInt(hex6Match[1].substring(2, 4), 16);
      this.blue = parseInt(hex6Match[1].substring(4, 6), 16);
      return true;
    }
    var colorMatch = colorChart[value];
    if (colorMatch) {
      this.red = colorMatch.red;
      this.green = colorMatch.green;
      this.blue = colorMatch.blue;
      return true;
    }
    var hex3Match = String(value).match(/#([0-9a-f]{3})/i);
    if (hex3Match) {
      this.red = parseInt(hex6Match[1].substring(0, 1), 16) * 16;
      this.green = parseInt(hex6Match[1].substring(1, 2), 16) * 16;
      this.blue = parseInt(hex6Match[1].substring(2, 3), 16) * 16;
      return true;
    }
    // TODO(rolandsteiner): handle % and decimal values
    var rgbMatch = String(value).match(/rgb\(([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/i);
    if (rgbMatch) {
      this.red = Number(rgbMatch[1]);
      this.green = Number(rgbMatch[2]);
      this.blue = Number(rgbMatch[3]);
      return true;
    }
    // TODO(rolandsteiner): handle % and decimal values
    var rgbaMatch = String(value).match(/rgba\(([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/i);
    if (rgbaMatch) {
      this.red = Number(rgbaMatch[1]);
      this.green = Number(rgbaMatch[2]);
      this.blue = Number(rgbaMatch[3]);
// TODO(rolandsteiner): handle alpha values
//      this.alpha = Number(rgbaMatch[4]);
      return true;
    }
    if (Number(value)) {
      this.red = value & 0xFF;
      this.green = (value & 0xFF00) >> 8;
      this.blue = (value & 0xFF0000) >> 16;
      return true;
    }
    // TODO(rolandsteiner): handle "hsl(h, s, l)" and "hsla(h, s, l, a)" notation
    return false;
  }
  this.toString = function() {
    return this.red + ',' + this.green + ',' + this.blue;
  }
  this.toHexString = function() {
    return ((this.red < 16) ? '0' : '') + this.red.toString(16) +
           ((this.green < 16) ? '0' : '') + this.green.toString(16) +
           ((this.blue < 16) ? '0' : '') + this.blue.toString(16);
  }
  this.valid = this.parse(value);
}

/**
 * Utility class for converting font sizes to the size
 * attribute in a font tag. Currently only converts px because
 * only the sizes and px ever come from queryCommandValue.
 *
 * @constructor
 * @param value {String} original value
 */
function Size(value) {
  var pxMatch = String(value).match(/([0-9]+)px/);
  if (pxMatch) {
    var px = Number(pxMatch[1]);
    if (px <= 10) {
      this.size = 1;
    } else if (px <= 13) {
      this.size = 2;
    } else if (px <= 16) {
      this.size = 3;
    } else if (px <= 18) {
      this.size = 4;
    } else if (px <= 24) {
      this.size = 5;
    } else if (px <= 32) {
      this.size = 6;
    } else if (px <= 47) {
      this.size = 7;
    } else {
      this.size = NaN;
    }
  } else if (Number(value)) {
       this.size = Number(value);
  } else {
    switch (value) {
      case 'x-small':
        this.size = 1;
        break;
      case 'small':
        this.size = 2;
        break;
      case 'medium':
        this.size = 3;
        break;
      case 'large':
        this.size = 4;
        break;
      case 'x-large':
        this.size = 5;
        break;
      case 'xx-large':
        this.size = 6;
        break;
      case 'xxx-large':
      case '-webkit-xxx-large':
        this.size = 7;
        break;
      default:
        this.size = null;
    }
  }
  this.compare = function(other) {
    return this.size == other.size;
  }
  this.toString = function() {
    return String(this.size);
  }
}
