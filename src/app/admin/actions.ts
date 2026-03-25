'use server';

import { prisma } from '../../lib/prisma';
import { revalidatePath } from 'next/cache';

export async function updateConfig(formData: FormData) {
  const settings = await prisma.siteConfig.findFirst();
  if (!settings) return;
  await prisma.siteConfig.update({
    where: { id: settings.id },
    data: {
      siteName: formData.get('siteName') as string,
      logoUrl: formData.get('logoUrl') as string,
      navToys: formData.get('navToys') as string,
      navAbout: formData.get('navAbout') as string,
      navHonors: formData.get('navHonors') as string,
      navTeam: formData.get('navTeam') as string,
      navParts: formData.get('navParts') as string,
      homeTitle: formData.get('homeTitle') as string,
      homeSub: formData.get('homeSub') as string,
      aboutTitle: formData.get('aboutTitle') as string,
      aboutText1: formData.get('aboutText1') as string,
      aboutText2: formData.get('aboutText2') as string,
    }
  });
  revalidatePath('/', 'layout');
}

export async function handleToy(formData: FormData) {
  const action = formData.get('_action');
  const id = formData.get('id') as string;
  const data = {
    name: formData.get('name') as string,
    desc: formData.get('desc') as string,
    fullDesc: formData.get('fullDesc') as string,
    price: formData.get('price') as string,
    img: formData.get('img') as string,
    category: formData.get('category') as string,
    features: formData.get('features') as string, // e.g. ["a","b"]
  };

  if (action === 'add') {
    await prisma.toy.create({ data: { ...data, id: Math.random().toString(36).substr(2, 9) } });
  } else if (action === 'update') {
    await prisma.toy.update({ where: { id }, data });
  } else if (action === 'delete') {
    await prisma.toy.delete({ where: { id } });
  }
  revalidatePath('/', 'layout');
}

export async function handleHonor(formData: FormData) {
  const action = formData.get('_action');
  const id = Number(formData.get('id'));
  const data = { year: formData.get('year') as string, title: formData.get('title') as string, org: formData.get('org') as string };
  
  if (action === 'add') await prisma.honor.create({ data });
  else if (action === 'update') await prisma.honor.update({ where: { id }, data });
  else if (action === 'delete') await prisma.honor.delete({ where: { id } });
  revalidatePath('/', 'layout');
}

export async function handleTeam(formData: FormData) {
  const action = formData.get('_action');
  const id = Number(formData.get('id'));
  const data = { name: formData.get('name') as string, role: formData.get('role') as string, slogan: formData.get('slogan') as string, avatar: formData.get('avatar') as string };
  
  if (action === 'add') await prisma.teamMember.create({ data });
  else if (action === 'update') await prisma.teamMember.update({ where: { id }, data });
  else if (action === 'delete') await prisma.teamMember.delete({ where: { id } });
  revalidatePath('/', 'layout');
}

export async function handlePartner(formData: FormData) {
  const action = formData.get('_action');
  const id = Number(formData.get('id'));
  const data = { name: formData.get('name') as string, icon: formData.get('icon') as string };
  
  if (action === 'add') await prisma.partner.create({ data });
  else if (action === 'update') await prisma.partner.update({ where: { id }, data });
  else if (action === 'delete') await prisma.partner.delete({ where: { id } });
  revalidatePath('/', 'layout');
}
