#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    // 颜色混合
    // float pct = abs(sin(u_time));
    // // 通过mix进行颜色混合，pct的取值为(0, 1)
    // color = mix(colorA, colorB, pct);


    // 颜色渐变
    vec3 pct = vec3(st.x);
    color = mix(colorA, colorB, pct);

    color = mix(color, vec3(1.0, 0.0, 0.0), plot(st, pct.r));
    color = mix(color, vec3(0.0, 1.0, 0.0), plot(st, pct.g));
    color = mix(color, vec3(0.0, 0.0, 1.0), plot(st, pct.b));


    gl_FragColor = vec4(color, 1.0);
}