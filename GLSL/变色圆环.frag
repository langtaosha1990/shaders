#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;  // 画布的尺寸
uniform float u_time;

float random(float x)
{
    float y = fract(sin(x)*100000.0);
    return y;
}

void main() {
    // 获取屏幕坐标并进行平移
    vec2 st = gl_FragCoord.xy / u_resolution - 0.5;

    float len = length(st);

    if (len > 0.5) {
        gl_FragColor = vec4(1);
    } else if (len > 0.4) {
        gl_FragColor = vec4(1.0, 0.1843, 0.0, 1.0);
    } else if (len > 0.3) {
        gl_FragColor = vec4(0., 1., 0, 1);
    } else if (len > 0.2) {
        gl_FragColor = vec4(0., 0., 1., 1);
    } else if (len > 0.1) {
        gl_FragColor = vec4(1., 0., 0, 1);
    }  else {
        gl_FragColor = vec4(0, 0, 0.0, 1.0);
    }   
}
