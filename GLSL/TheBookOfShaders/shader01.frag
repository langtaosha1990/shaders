#ifdef GL_ES
precision mediump float;
#endif

/*
支持uniform的类型有：float、vec2、vec3、vec4、mat2、mat3、mat4和sampler2D
*/
// u_以明确说明此变量的性质
uniform vec2 u_resolution;  // 绘制着色器的画布大小
uniform vec2 u_mouse;   // 鼠标在画布中的位置，以像素为单位
uniform float u_time;   // u_time自着色器启动以来的秒数

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);

    // color += vec3(st.x,  st.y, 0.0);    // 渐变
    // color += vec3(abs(sin(u_time)), 0.0, 0.0);  // 红色闪烁
    // color += vec3(abs(sin(u_time * 3.)), 0.0, 0.0);  // 加快红色闪烁速度
    // color += vec3(abs(sin(u_time * 0.5)), 0.0, 0.0);  // 减慢红色闪烁速度

    // 以不同频率闪烁rgb
    color.r += abs(sin(u_time * 0.5));  
    color.g += abs(sin(u_time * 1.0));  
    color.b += abs(sin(u_time * 1.5));  


    gl_FragColor = vec4(color, 1.0);
}