#ifdef GL_ES
precision mediump float;
#endif

#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 square(vec2 st) {


    // float left = step(0.1, st.x);
    // float bottom = step(0.1, st.y);
    // color = vec3(left * bottom);
    // 或
    vec2 borders = step(vec2(0.1), st);
    float pct = borders.x * borders.y;

    // 上-右
    // vec2 tr = step(vec2(0.1), 1.0 - st);
    // 或
    vec2 tr = step(vec2(0.1), 1.0 - st);    // 通过转至计算上右

    pct *= tr.x * tr.y;
    vec3 color = vec3(pct);
    return color;
}

vec3 circel0(vec2 st) {
    float pct = 0.0;

    pct = distance(st, vec2(0.5));

    vec3 color = vec3(pct);
    return color;
}

// 这个方式绘制的圆更顺滑
float circel1(in vec2 _st, in float _radius) {
    vec2 dist = _st - vec2(0.5);
    
    return 1.0 - smoothstep(_radius - (_radius * 0.01),
                            _radius + (_radius * 0.01),
                            dot(dist, dist) * 4.0);
}


// 距离场
vec3 distanceField(in vec2 st) {
    st.x *= u_resolution.x / u_resolution.y;
    vec3 color = vec3(0.0);
    float d = 0.0;

    st = st * 2.0 - 1.0;

    d = length(abs(st) - 0.3);
    d = length(min(abs(st) - 0.3, 0.0));
    d = length(max(abs(st) - 0.3, 0.0));


    color = vec3(fract(d * 10.0));
    // color = vec3(step(.3, d) * step(d, .4));
    // color = vec3(smoothstep(.3, .4, d) * smoothstep(.6, .5, d));

    return color;
}

vec3 polarCoordinatesDraw(vec2 st) {
    vec3 color = vec3(0.0);
    vec2 pos = vec2(0.5) - st;

    float r = length(pos) * 2.0;
    float a = atan(pos.y, pos.x);

    float f = cos(a * 3.0);
    // f = abs(cos(a * 3.0));
    // f = abs(cos(a * 2.5)) * 0.5 + 3.0;
    // f = abs(cos(a*12.)*sin(a*3.))*.8+.1;
    // f = smoothstep(-.5,1., cos(a*10.))*0.2+0.5;

    color = vec3(1.0 - smoothstep(f, f + 0.01, r));

    return color;
}


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    // color = square(st);  // 画方形
    // color = circel0(st);     // 画圆
    // color = vec3(circel1(st, 0.9));  // 画圆
    // color = distanceField(st);  // 距离场
    color = polarCoordinatesDraw(st);  // 距离场


    gl_FragColor = vec4(color, 1.0);
}