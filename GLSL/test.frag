#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 coord = gl_FragCoord.xy;
    vec3 color = vec3(0.0);

    coord.x = abs(coord.x - u_mouse.x) / u_resolution.x;
    coord.y = abs(coord.y - u_mouse.y) / u_resolution.y;
    if (length(coord) < 0.05) {
        color = vec3(1.0);
    } else {
        float l = length(coord);
        float c = 0.2;
        color = vec3(max(sin(u_time) * 0.05 / l, 0.02 / l));
    }

    gl_FragColor = vec4(color, 1);
}