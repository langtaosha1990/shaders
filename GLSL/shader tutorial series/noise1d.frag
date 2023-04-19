#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_mouse;

float nosie1d(float value) {
    return cos(value + cos(value * 90.0) * 100.0) * 0.5 + 0.5;
}

void main() {
    vec2 coord = gl_FragCoord.xy;
    vec3 color = vec3(0.0);

    color.r += nosie1d(u_time);

    gl_FragColor = vec4(color, 1.0);
}