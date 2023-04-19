#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
void main() {
    // 获取屏幕坐标并进行平移
    vec2 st = gl_FragCoord.xy / u_resolution - 0.5;
    
    vec3 color = vec3(1.0);
    float lengthV = length(st); // 求每个顶点的长度
    float sphere = max(0.0, lengthV * 2.0); // 

    float sphereAlpha = step(0.5, sphere);  // 
    color*=clamp(sphereAlpha, 0., 0.75);

    // 高光：就是一个颜色渐变的球
    color+=(1.-length(st-vec2(-0.12,0.12))*3.)*(1.-sphereAlpha);

float refLight=1.-sphereAlpha;
    refLight*=smoothstep(0.3,0.5,(length(st*0.5 + vec2(0.05,-0.08)))*2.);

// color = vec3(refLight);
color += refLight;
float sha = smoothstep(0.5, 0.65, length(st * vec2(0.2, 1.0) + vec2(-0.05, 0.22)) * 8.0);
    sha += (1.0 - smoothstep(0.7, 0.05, length(st*vec2(0.2, 1.0) + vec2(-0.02, 0.22)) * 6.0)) * 0.5;
    sha = clamp(sha + (1.0 - sphereAlpha), 0.0, 1.0);

color*=sha;
color = color * 0.8 + 0.1;
gl_FragColor = vec4(color, 1.0);

}