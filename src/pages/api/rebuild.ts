export async function GET() {
  const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK_URL; // store in env var

  if (!deployHookUrl) {
    return new Response(JSON.stringify({ error: 'Missing VERCEL_DEPLOY_HOOK_URL env variable' }), { status: 500 });
  }

  const res = await fetch(deployHookUrl, {
    method: 'POST'
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Failed to trigger redeploy' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }));
}
