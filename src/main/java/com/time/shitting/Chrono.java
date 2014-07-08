package com.time.shitting;

import java.text.DateFormat;
import java.text.ParseException;

public class Chrono{

	private float startTime;
	private float endTime;
	
	public float getStartTime() {
		return startTime;
	}

	public void setStartTime(float startTime) {
		this.startTime = startTime;
	}

	public float getEndTime() {
		return endTime;
	}

	public void setEndTime(float endTime) {
		this.endTime = endTime;
	}

	public void start() {
		// TODO Auto-generated method stub
		System.out.println("Start the Threa Chrono");
	}
	
	public static void main(String[] args) {
		Chrono c = new Chrono();
		c.start();
		System.out.println(DateFormat.getDateInstance().getCalendar().getTime());;
	}

}
