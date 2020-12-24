uniform sampler2D Tex0;
uniform vec2 resolution;
uniform int lCell_1;
uniform int lCell_2;
uniform int lCell_3;
uniform int lCell_4;
uniform int lCell_5;
uniform int lCell_6;
uniform int lCell_7;
uniform int lCell_8;
uniform int dCell_1;
uniform int dCell_2;
uniform int dCell_3;
uniform int dCell_4;
uniform int dCell_5;
uniform int dCell_6;
uniform int dCell_7;
uniform int dCell_8;

int get(int x, int y) {
    return int(texture2D(Tex0, (gl_FragCoord.xy + vec2(x, y)) / resolution).r);
}

void main() {
    int sum = get(-1, -1) +
              get(-1,  0) +
              get(-1,  1) +
              get( 0, -1) +
              get( 0,  1) +
              get( 1, -1) +
              get( 1,  0) +
              get( 1,  1);
    float state = float(get(0, 0));
    if (sum == lCell_1 && state == 0.0 ||
        sum == lCell_2 && state == 0.0 ||
        sum == lCell_3 && state == 0.0 ||
        sum == lCell_4 && state == 0.0 ||
        sum == lCell_5 && state == 0.0 ||
        sum == lCell_6 && state == 0.0 ||
        sum == lCell_7 && state == 0.0 || 
        sum == lCell_8 && state == 0.0) { 
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);   
    } else if (sum == dCell_1 && state == 1.0 || 
               sum == dCell_2 && state == 1.0 || 
               sum == dCell_3 && state == 1.0 || 
               sum == dCell_4 && state == 1.0 || 
               sum == dCell_5 && state == 1.0 || 
               sum == dCell_6 && state == 1.0 || 
               sum == dCell_7 && state == 1.0 || 
               sum == dCell_8 && state == 1.0 ) {       
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
}