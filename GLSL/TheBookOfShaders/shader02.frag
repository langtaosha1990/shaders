#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// smoothstep的定义
float mySmoothstep(float t1, float t2, float x) {
  // Scale, bias and saturate x to 0..1 range
  // 还记得么？在remap算法中接触过
   x = clamp((x - t1) / (t2 - t1), 0.0, 1.0); 
//    clamp();
  // Evaluate polynomial
  return x * x * (3.0 - 2.0 * x);
}


float plot0(vec2 st) {
    /*
        smoothstep可以用来生成0到1的平滑过渡值，它也叫平滑阶梯函数,
    */
    return smoothstep(0.02, 0.0, abs(st.y - st.x));
}

float plot1(vec2 st, float pct) {
    return smoothstep(pct - 0.02, pct, st.y) - smoothstep(pct, pct + 0.02, st.y);
}


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    // 绘制x = y
    // float y = st.x;
    // float pct = plot0(st); 

    // 绘制x的n次方
    float n = 5.0;
    float y = pow(st.x, n);
    float pct = plot1(st, y); 


    vec3 color = vec3(y);   

    color = (1.0 - pct) * color + pct * vec3(0.0, 1.0, 0.0);

    gl_FragColor = vec4(color, 1.0);
}