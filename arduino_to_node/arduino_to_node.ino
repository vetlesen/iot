int percent = 0;
int prevPercent = 0;
int lightPin = 2;


void setup() {
  
  Serial.begin( 9600 );
  pinMode(lightPin, OUTPUT);

  
}

void loop() {
  
  percent = round(analogRead(0) / 1024.00 * 100);
  
  if(percent != prevPercent) {
    
    Serial.println(percent);
    
    prevPercent = percent;
    
  }

   if (Serial.available() > 0) {
    
    String receivedString = "";
    
    while (Serial.available() > 0) {
      receivedString += char(Serial.read ());
    }
    
    Serial.println(receivedString);
    
    if(receivedString == "1")
      digitalWrite(lightPin,HIGH);  
    else
      digitalWrite(lightPin,LOW);
    
  }
  
  delay(100);
  
}