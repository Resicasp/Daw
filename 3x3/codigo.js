		function cambiaCeldaNO(flag) { //Celda NO
			if(flag == 1)
			{
				//CAMBIAR COLOR DE LA CELDA
				if( document.getElementById("celdaNO").style.backgroundColor != 'red')
					document.getElementById("celdaNO").style.backgroundColor = 'red';
				else
					document.getElementById("celdaNO").style.backgroundColor = '#20E9BB';
				
			}
			else
			{
				//CAMBIAR COLOR DE LA CELDA
				if( document.getElementById("celdaNO").style.backgroundColor != 'red')
					document.getElementById("celdaNO").style.backgroundColor = 'red';
				else
					document.getElementById("celdaNO").style.backgroundColor = '#20E9BB';
				return;
			}
			//CAMBIAR COLOR ADYACENTE	
			 cambiaCeldaO(0);
			 cambiaCeldaN(0);
				
			 Victoria();
				
		}
		function cambiaCeldaN(flag) { //Celda N
			if(flag == 1)
			{
				//CAMBIAR COLOR DE LA CELDA
				if( document.getElementById("celdaN").style.backgroundColor != 'red')
					document.getElementById("celdaN").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaN").style.backgroundColor = '#20E9BB';
				                                  
			}                                     
			else                                  
			{                                     
				//CAMBIAR COLOR DE LA CELDA       
				if( document.getElementById("celdaN").style.backgroundColor != 'red')
					document.getElementById("celdaN").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaN").style.backgroundColor = '#20E9BB';
				return;
			}
				
				 cambiaCeldaNO(0);
				 cambiaCeldaNE(0);
				 cambiaCeldaC(0);
			
			Victoria();
		}
		function cambiaCeldaNE(flag) { //Celda NE
			if(flag == 1)
			{
				//CAMBIAR COLOR DE LA CELDA
				if( document.getElementById("celdaNE").style.backgroundColor != 'red')
					document.getElementById("celdaNE").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaNE").style.backgroundColor = '#20E9BB';
				                                  
			}                                     
			else                                  
			{                                     
				//CAMBIAR COLOR DE LA CELDA       
				if( document.getElementById("celdaNE").style.backgroundColor != 'red')
					document.getElementById("celdaNE").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaNE").style.backgroundColor = '#20E9BB';
				return;
			}
				
				cambiaCeldaN(0);
				cambiaCeldaE(0);
				
			Victoria();
		}
		function cambiaCeldaO(flag) { //Celda O
			if(flag == 1)
			{
				//CAMBIAR COLOR DE LA CELDA
				if( document.getElementById("celdaO").style.backgroundColor != 'red')
					document.getElementById("celdaO").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaO").style.backgroundColor = '#20E9BB';
				                                  
			}                                     
			else                                  
			{                                     
				//CAMBIAR COLOR DE LA CELDA       
				if( document.getElementById("celdaO").style.backgroundColor != 'red')
					document.getElementById("celdaO").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaO").style.backgroundColor = '#20E9BB';
				return;
			}
			
			cambiaCeldaNO(0);
			 cambiaCeldaC(0);
			 cambiaCeldaSO(0);
			
			Victoria();
		}
		function cambiaCeldaC(flag) { //Celda C
			if(flag == 1)
			{
				//CAMBIAR COLOR DE LA CELDA
				if( document.getElementById("celdaC").style.backgroundColor != 'red')
					document.getElementById("celdaC").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaC").style.backgroundColor = '#20E9BB';
				                                  
			}                                     
			else                                  
			{                                     
				//CAMBIAR COLOR DE LA CELDA       
				if( document.getElementById("celdaC").style.backgroundColor != 'red')
					document.getElementById("celdaC").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaC").style.backgroundColor = '#20E9BB';
				return;
			}
			
			cambiaCeldaN(0);
			cambiaCeldaS(0);
			cambiaCeldaE(0);
			cambiaCeldaO(0);
			Victoria();
		}
		function cambiaCeldaE(flag) { //Celda E
			if(flag == 1)
			{
				//CAMBIAR COLOR DE LA CELDA
				if( document.getElementById("celdaE").style.backgroundColor != 'red')
					document.getElementById("celdaE").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaE").style.backgroundColor = '#20E9BB';
				                                  
			}                                     
			else                                 
			{                                     
				//CAMBIAR COLOR DE LA CELDA       
				if( document.getElementById("celdaE").style.backgroundColor != 'red')
					document.getElementById("celdaE").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaE").style.backgroundColor = '#20E9BB';
				return;
			}
			
			cambiaCeldaNE(0);
			cambiaCeldaC(0);
			 cambiaCeldaSE(0);
			
			Victoria();
		}
		function cambiaCeldaSO(flag) { //Celda SO
			if(flag == 1)
			{
				//CAMBIAR COLOR DE LA CELDA
				if( document.getElementById("celdaSO").style.backgroundColor != 'red')
					document.getElementById("celdaSO").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaSO").style.backgroundColor = '#20E9BB';
				                                  
			}                                     
			else                                  
			{                                     
				//CAMBIAR COLOR DE LA CELDA       
				if( document.getElementById("celdaSO").style.backgroundColor != 'red')
					document.getElementById("celdaSO").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaSO").style.backgroundColor = '#20E9BB';
				return;
			}
			
			cambiaCeldaO(0);
			 cambiaCeldaS(0);
			
			Victoria();
		}
		function cambiaCeldaS(flag) { //Celda S
			if(flag == 1)
			{
				//CAMBIAR COLOR DE LA CELDA
				if( document.getElementById("celdaS").style.backgroundColor != 'red')
					document.getElementById("celdaS").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaS").style.backgroundColor = '#20E9BB';
				                                  
			}                                     
			else                                  
			{                                     
				//CAMBIAR COLOR DE LA CELDA       
				if( document.getElementById("celdaS").style.backgroundColor != 'red')
					document.getElementById("celdaS").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaS").style.backgroundColor = '#20E9BB';
				return;
			}
			
			cambiaCeldaSO(0);
			cambiaCeldaC(0);
			 cambiaCeldaSE(0);
			
			Victoria();
		}
		function cambiaCeldaSE(flag) { //Celda SE
			if(flag == 1)
			{
				//CAMBIAR COLOR DE LA CELDA
				if( document.getElementById("celdaSE").style.backgroundColor != 'red')
					document.getElementById("celdaSE").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaSE").style.backgroundColor = '#20E9BB';
				                                  
			}                                     
			else                                  
			{                                     
				//CAMBIAR COLOR DE LA CELDA       
				if( document.getElementById("celdaSE").style.backgroundColor != 'red')
					document.getElementById("celdaSE").style.backgroundColor = 'red';
				else                              
					document.getElementById("celdaSE").style.backgroundColor = '#20E9BB';
				return;
			}
			
			cambiaCeldaS(0);
			 cambiaCeldaE(0);
			
			Victoria();
		}
		function Victoria() {
			if( document.getElementById("celdaNO").style.backgroundColor == 'red' &&
				document.getElementById("celdaN").style.backgroundColor == 'red' &&
				document.getElementById("celdaNE").style.backgroundColor == 'red' &&
				document.getElementById("celdaO").style.backgroundColor == 'red' &&
				document.getElementById("celdaC").style.backgroundColor == 'red' &&
				document.getElementById("celdaE").style.backgroundColor == 'red' &&
				document.getElementById("celdaSO").style.backgroundColor == 'red' &&
				document.getElementById("celdaS").style.backgroundColor == 'red' &&
				document.getElementById("celdaSE").style.backgroundColor == 'red')
					alert("Has ganado bro, eres un maquinote!");
		}