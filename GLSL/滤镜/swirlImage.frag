#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;

uniform sampler2D   u_tex0;
uniform float u_time;
uniform vec2 u_mouse;

// 旋涡动画，摘自GPUImage
void main() {

    vec2 coord = gl_FragCoord.xy / u_resolution;

    float angle = 0.5;
    float dist = length(coord - u_mouse / u_resolution);
    vec2 center = u_mouse / u_resolution;
    float radius = 0.3;
    if(dist < radius) {
        coord -= center;
        float percent = (radius - dist) / radius;
        float theta = percent * percent * angle * 8.0;
        float s = sin(theta);
        float c = cos(theta);
        coord = vec2(dot(coord, vec2(c, -s)), dot(coord, vec2(s, c)));
        coord += center;
    }


    gl_FragColor = texture2D(u_tex0, coord);
}