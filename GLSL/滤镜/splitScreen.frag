#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;

uniform sampler2D   u_tex0;

vec4 splitScreen2(vec2 coord) {
    if(coord.y > 0.5) {
        coord.y = (coord.y - 0.5) * 2.0;
    } else {
        coord.y *= 2.0;
    }
    vec4 color = texture2D(u_tex0, coord);
    return color;
}

vec4 splitScreen3(vec2 coord) {
    if(coord.y > 2.0 / 3.0) {
        coord.y = (coord.y - 2.0 / 3.0) * 3.0;
    } else if (coord.y > 1.0 / 3.0) {
        coord.y = (coord.y - 1.0 / 3.0) * 3.0;
    } else {
        coord.y *= 3.0;
    }
    vec4 color = texture2D(u_tex0, coord);
    return color;
}

vec4 splitScreen4(vec2 coord) {
    if(coord.y > 1.0 / 2.0) {
        coord.y = (coord.y - 0.5) * 2.0;
    }  else {
        coord.y *= 2.0;
    }
    if(coord.x > 1.0 / 2.0) {
        coord.x = (coord.x - 0.5) * 2.0;
    }  else {
        coord.x *= 2.0;
    }
    vec4 color = texture2D(u_tex0, coord);
    return color;
}

vec4 splitScreen6(vec2 coord) {
    if(coord.y > 2.0 / 3.0) {
        coord.y = (coord.y - 2.0 / 3.0) * 3.0;
    }  else if (coord.y > 1.0 / 3.0) {
        coord.y = (coord.y - 1.0 / 3.0) * 3.0;
    } else {
        coord.y *= 3.0;
    }

    if(coord.x > 1.0 / 2.0) {
        coord.x = (coord.x - 0.5) * 2.0;
    }  else {
        coord.x *= 2.0;
    }
    vec4 color = texture2D(u_tex0, coord);
    return color;
}


vec4 splitScreen9(vec2 coord) {
    if(coord.y > 2.0 / 3.0) {
        coord.y = (coord.y - 2.0 / 3.0) * 3.0;
    }  else if (coord.y > 1.0 / 3.0) {
        coord.y = (coord.y - 1.0 / 3.0) * 3.0;
    } else {
        coord.y *= 3.0;
    }

    if(coord.x > 2.0 / 3.0) {
        coord.x = (coord.x - 2.0 / 3.0) * 3.0;
    }  else if (coord.x > 1.0 / 3.0) {
        coord.x = (coord.x - 1.0 / 3.0) * 3.0;
    } else {
        coord.x *= 3.0;
    }

    vec4 color = texture2D(u_tex0, coord);
    return color;
}



void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;

    // vec4 color = splitScreen2(coord);  
    // vec4 color = splitScreen3(coord); 
    // vec4 color = splitScreen4(coord); 
    // vec4 color = splitScreen6(coord); 
    vec4 color = splitScreen9(coord); 

    // color = texture2D(u_tex0, coord); 
    
    gl_FragColor = color;
}
