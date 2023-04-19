
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2        u_resolution;

uniform sampler2D   u_tex0;
uniform float u_time;

void main (void) {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    coord.x += sin(u_time);

    gl_FragColor = texture2D(u_tex0, coord);
}
