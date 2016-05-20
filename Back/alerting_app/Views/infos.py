
from pyramid.security import NO_PERMISSION_REQUIRED
from pyramid.view import view_config
from ..Models import DBSession,Base
from pyramid.response import Response
from sqlalchemy import select,text,bindparam,and_
import json

@view_config(route_name='infos',renderer='json',permission=NO_PERMISSION_REQUIRED )
def getSomeLogs(request):

	positionPage = "1"

	if len( request.params ) > 0:
		print("TRUCS SUPER BIEN A FAIRE")
		if 'Fk_Alerte' in request.params.keys() :
			Fk_Alerte = "\'"+request.params['Fk_Alerte']+"\'"
		else:
			print("non pas de type en parametre")
		if 'page' in request.params.keys():
			positionPage = request.params['page']
		if 'per_page' in request.params.keys():
			nbPerPage = request.params['per_page']
		if 'search' in request.params.keys():
			search = request.params['search']
		else:
			search =''

		queryTotal = text('SELECT COUNT(*) as NB_ERREUR FROM Ocurrence_Alerte WHERE Fk_Alerte ='+Fk_Alerte+';')
		#recupere le nombre de row
		resultsTotal = DBSession.execute(queryTotal).fetchone()

		nbPerPage = 10
		queryTmp = 'DECLARE @PageNumber AS INT, @RowspPage AS INT SET @PageNumber = '+str(positionPage)+' SET @RowspPage = '+str(nbPerPage)+' SELECT convert(varchar, ID ) O.ID,Nom,Comportement,Niveau,Application,Requête,URL,RequêteCorrection,Texte,FORMAT(Date, \'dd/MM/yyy HH:mm:ss\',\'en-US\') Date FROM Ocurrence_Alerte'
		# if 'search' in request.params.keys():
		# 	search = request.params['search']
		valkey = request.params['Fk_Alerte']
		query = text('SELECT O.ID as Ocurrence_ID, O.Fk_Alerte as Alerte_ID, O.Date, A.Nom FROM Ocurrence_Alerte O, Alerte A WHERE O.Fk_Alerte=A.ID and Fk_Alerte=:val').bindparams(bindparam('val',valkey))
	else:
		print("Aucun param on renvoi l'ensemble des ressources")
		nbPerPage = resultsTotal['NB_ALERTE']
		query = 'select * from Ocurrence_Alerte'

	params = request.params.mixed()
	logTable = Base.metadata.tables['Ocurrence_Alerte']

	 #.bindparams(bindparam('ori',origin))

	results = DBSession.execute(query).fetchall()
	# print(type(results))
	data = [dict(row) for row in results]

	#print("///////***********//////////////**********//////////")
	lMin = (int(positionPage)-1)*(int(nbPerPage))
	lMax = lMin + len(results)
	request.response.headers.update({'Access-Control-Expose-Headers' : 'true'})
	request.response.headers.update({ 'Content-Range' : ''+str(lMin)+'-'+str(lMax)+'/'+str(resultsTotal['NB_ERREUR'])+''})
	request.response.headers.update({ 'Content-Max' : ''+str(resultsTotal['NB_ERREUR'])+''})
	#print( request.response )
	#print("///////***********//////////////**********//////////")

	return data

@view_config(route_name='infos/id',renderer='json',permission=NO_PERMISSION_REQUIRED )
def getAllLogs(request):

	print(request.params.mixed())
	id_ = request.matchdict['id']
	logTable = Base.metadata.tables['Ocurrence_Alerte']
	alerteTable = Base.metadata.tables['Alerte']
	typeTable = Base.metadata.tables['TypeAlerte']

	#query2 = text('select O.ID, O.Date, A.Nom, ISNULL(A.Comportement,0), ISNULL(A.Niveau,0), ISNULL(A.Application,0), ISNULL(A.Requête,0), ISNULL(A.URL,0), ISNULL(A.RequêteCorrection,0) from Ocurrence_Alerte O, Alerte A where O.Fk_Alerte = A.ID and A.ID = 1')

	# query2 = 'select O.ID, O.Date, A.Nom ,A.Comportement ,A.niveau'
	# query2 += ', A.application,A.Requete'#,A.RequêteCorrection,A.url '
	# query2 += ' from Ocurrence_Alerte O, Alerte A where O.Fk_Alerte = A.ID'
	query2 = select([typeTable.c['NomType'], typeTable.c['Icone'], logTable.c['ID'],logTable.c['Date'],alerteTable.c['Nom'],alerteTable.c['Comportement'],alerteTable.c['Niveau'],alerteTable.c['Application'],alerteTable.c['Requete'],alerteTable.c['RequeteCorrection']]).where(and_(logTable.c['Fk_Alerte'] == alerteTable.c['ID'], alerteTable.c['Fk_TypeAlerte'] == typeTable.c['ID'], alerteTable.c['ID'] == id_))

	print(query2)

	results = DBSession.execute(query2).fetchone()
	print(results)
	data = dict(results)
	return data