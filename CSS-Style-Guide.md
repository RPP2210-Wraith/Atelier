# CSS Style guide
ID names should be in camelCase

    #pageContainer {
 Class names should be lowercase with words separated by a single dash
 
	.my-class-name {

To reduce re-writing the same types of CSS , use existing utility-based class names in styles.css by simply adding them to the class name of the element.

	styles.css
		.margin-auto {
		  margin: auto
		}
		
		.background-color-card {
		  background-color: red
		}
In you React component or other HTML element:

	
	<div className = "margin-auto background-color-card"> Centered text </div>

