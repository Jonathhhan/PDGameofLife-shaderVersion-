// vertex program

void main() {
	gl_TexCoord[0] = gl_TextureMatrix[0]*gl_MultiTexCoord0;
	gl_Position = gl_ModelViewProjectionMatrix*gl_Vertex;
}