static var go : boolean = false;
private var groundHitCount : int = 0;

private var mph : int = 0;

public var speed : int = 10;

public static var blueDiamonds : int = 0;
public static var purpleDiamonds : int = 0;

public static var blueLocations = new Array();
public static var purpleLocations = new Array();

function Awake()
{
	
}

function Update () 
{
	if(go)
	{
		if(Input.GetKey(KeyCode.UpArrow) || Input.GetKey(KeyCode.W))
		{
			rigidbody.AddForce(Camera.main.transform.forward * speed);
		}
		if(Input.GetKey(KeyCode.DownArrow) || Input.GetKey(KeyCode.S))
		{
			rigidbody.AddForce (-Camera.main.transform.forward * speed);
		}
		if(Input.GetKey(KeyCode.LeftArrow) || Input.GetKey(KeyCode.A))
		{
			rigidbody.AddForce (-Camera.main.transform.right * speed);
		}
		if(Input.GetKey(KeyCode.RightArrow) || Input.GetKey(KeyCode.D))
		{
			rigidbody.AddForce (Camera.main.transform.right * speed);
		}
		if(Input.GetKeyDown(KeyCode.Space))
		{
			if(groundHitCount > 0)
				rigidbody.AddForce(Vector2.up * 300);
		}
		
		mph = rigidbody.velocity.magnitude * 2.237;
		
		var speedDisplay = GameObject.Find('speedDisplay').guiText;
		speedDisplay.text = mph.ToString();
	}
}

function OnCollisionEnter (collision : Collision) 
{
	if(collision.gameObject.tag == 'floor')
   		++groundHitCount;
}

function OnCollisionExit (collision : Collision) 
{
    if(collision.gameObject.tag == 'floor')
    	--groundHitCount;
}