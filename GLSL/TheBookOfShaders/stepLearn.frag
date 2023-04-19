#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI 3.14159265359

float plot(vec2 st, float pct) {
    return smoothstep(pct - 0.02, pct, st.y) - smoothstep(pct, pct + 0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    /*
     smoothstep()。当给定一个范围的上下限和一个数值，这个函数会在已有的范围内给出插值。
     前两个参数规定转换的开始和结束点，第三个是给出一个值用来插值。
    */

    /*
    step() 插值函数需要输入两个参数。第一个是极限或阈值，第二个是我们想要检测或通过的值。
    对任何小于阈值的值，返回 0.0，大于阈值，则返回 1.0
    */
    
    // float y = step(0.5, st.x);   
    // float y = smoothstep(0.1, 0.9, st.x); 
    // float y = smoothstep(0.2,0.5,st.x) - smoothstep(0.5,0.8,st.x);
    float y = smoothstep(0.2, 0.8, st.x);

    vec3 color = vec3(y);

    float pct = plot(st, y);
    color = (1.0 - pct) * color + pct * vec3(0.0, 1.0, 0.0);
    gl_FragColor = vec4(color, 1.0);
}