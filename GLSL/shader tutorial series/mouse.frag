#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;   // 鼠标在canvas中的位置

void main() {
    vec2 coord = gl_FragCoord.xy;
    vec3 color = vec3(0.0);
    color.r = u_mouse.x / u_resolution.x;
    color.b = u_mouse.y / u_resolution.y;
    gl_FragColor = vec4(color, 1.0);
}
