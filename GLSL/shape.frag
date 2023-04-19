#ifdef GL_ES
precision mediump float;
#endif
const float PI = 3.1415926;
uniform vec2 u_resolution;

// 绘制多边形
float polyShape(vec2 pos, float radius, float sideCount)
{
    pos = pos - 0.5;

    float angle = atan(pos.y, pos.x);
    float slice = PI * 2.0 / sideCount;
    float poly = angle;

    poly = length(pos);
    poly = 0.5 + angle / slice;
    poly = floor(poly);
    poly *= slice;
    poly -= angle;
    poly = cos(poly);
    poly *= length(pos);
    poly = step(radius, poly);
    return poly;
}

// 绘制矩形
float rectshape(vec2 position, vec2 scale) {
    scale = vec2(0.5) - scale * 0.5;
    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
    shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
    return shaper.x * shaper.y;
}

void main() {
    vec2 pos = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(polyShape(pos, 0.2, 4.0), 0, 0);

    // float rectangle = rectshape(pos, vec2(0.6, 0.9));
    // vec3 color = vec3(rectangle);
    
    gl_FragColor = vec4(color, 1);
}
