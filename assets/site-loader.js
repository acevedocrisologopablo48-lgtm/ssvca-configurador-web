/** Resolve the current published entry even when the HTML is cached. */
export async function loadPublishedApplication({base,fallback,fetchRelease=fetch,importEntry=url=>import(url),timeoutMs=5000}){
  const allowed=entry=>typeof entry==='string'&&/^assets\/index-[A-Za-z0-9_-]+\.js$/.test(entry);
  if(!allowed(fallback))throw new Error('No se reconoce la versión de respaldo.');
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),timeoutMs);
  let entry=fallback,source='fallback',release;
  try{
    const url=new URL('release.json',base);url.searchParams.set('refresh',String(Date.now()));
    const response=await fetchRelease(url.href,{cache:'no-store',signal:controller.signal});
    if(!response.ok)throw new Error('No se pudo consultar la publicación.');
    release=await response.json();
    if(!allowed(release.entry))throw new Error('La publicación no identifica una entrada válida.');
    entry=release.entry;source='manifest';
  }catch{release=undefined;}
  finally{clearTimeout(timer);}
  // An application runtime error must not start a second copy of the app.
  await importEntry(new URL(entry,base).href);
  return {entry,source,release};
}

if(typeof document!=='undefined'){
  const base=new URL('../',import.meta.url);
  const script=document.querySelector('script[data-ssvca-loader]');
  loadPublishedApplication({base,fallback:script?.dataset.entry}).then(result=>{
    const marker=document.createElement('meta');marker.name='ssvca-published-entry';marker.content=result.entry;marker.dataset.source=result.source;document.head.append(marker);
  }).catch(error=>{
    console.error('No se pudo iniciar la planta:',error);
    const app=document.getElementById('app');if(app&&!app.children.length)app.textContent='No se pudo cargar la planta. Recarga la página para volver a intentarlo.';
  });
}
