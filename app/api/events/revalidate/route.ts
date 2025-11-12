import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// This endpoint can be called by a cron job to proactively refresh the events cache
// Example: Call this every 2 hours via Vercel Cron or external service
export async function GET(request: NextRequest) {
  // Optional: Add authentication to prevent unauthorized revalidation
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;
  
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Revalidate the events route
    revalidatePath('/api/events');
    
    // Also trigger a fetch to warm the cache
    const baseUrl = request.nextUrl.origin;
    await fetch(`${baseUrl}/api/events`, {
      cache: 'no-store',
    });

    console.log('Events cache revalidated successfully');
    
    return NextResponse.json({ 
      revalidated: true, 
      timestamp: new Date().toISOString() 
    });
  } catch (error) {
    console.error('Error revalidating events cache:', error);
    return NextResponse.json(
      { 
        revalidated: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
