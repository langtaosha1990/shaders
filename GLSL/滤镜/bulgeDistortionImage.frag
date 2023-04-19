#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;

uniform sampler2D   u_tex0;
uniform vec2 u_mouse;

// 凸起失真，鱼眼效果，摘自GPUImage
void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    float aspectRatio = 1.0;
    vec2 textureCoordinateToUse = vec2(coord.x, (coord.y * aspectRatio + 0.5 - 0.5 * aspectRatio));

    vec2 center = u_mouse / u_resolution;
    float dist = abs(length(center - textureCoordinateToUse));
    textureCoordinateToUse = coord;

    float radius = 0.2;
    float scale = 0.5;
    if(dist < radius) {
        textureCoordinateToUse -= center;
        float percent = 1.0 - ((radius - dist) / radius) * scale;
        percent = percent * percent;

        textureCoordinateToUse = textureCoordinateToUse * percent;
        textureCoordinateToUse += center;
    }


    gl_FragColor = texture2D(u_tex0, textureCoordinateToUse);
}