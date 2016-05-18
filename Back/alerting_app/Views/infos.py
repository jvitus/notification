
from pyramid.security import NO_PERMISSION_REQUIRED
from pyramid.view import view_config
from ..Models import DBSession,Base
from pyramid.response import Response
from sqlalchemy import select,text,bindparam
import json



@view_config(route_name='infos',renderer='json',permission=NO_PERMISSION_REQUIRED )
def getSomeLogs(request):

	positionPage = "1"



	# print("affichage des params mixed")
	# print(request)
	# print("fin de params mixed")
	# if request.matchdict is None :
	#print("++++++++++++++++++++++++++++++++++++++++++++")
	#print( request.route_url)
	#print( request.params)
	#print("--------------------------------------------")
	#print( request.urlvars)
	#print ( request.urlargs )
	#print("////////////////////////////////////////////")
	if len( request.params ) > 0:
		print("TRUCS SUPER BIEN A FAIRE")
		if 'ORIGIN' in request.params.keys() :
			origin = "\'"+request.params['ORIGIN']+"\'"
		else:
			print("non pas de origin en parametre")
		if 'page' in request.params.keys():
			positionPage = request.params['page']
		if 'per_page' in request.params.keys():
			nbPerPage = request.params['per_page']
		if 'search' in request.params.keys():
			search = request.params['search']
		else:
			search =''


		queryTotal = text('SELECT COUNT(*) as NB_ERREUR FROM TLOG_MESSAGES WHERE ORIGIN ='+origin+';')
		#recupere le nombre de row
		resultsTotal = DBSession.execute(queryTotal).fetchone()
		#print('************************************************')
		#print(positionPage)
		#print(nbPerPage)
		#print('************************************************')
		# nbPerPage = 10
		queryTmp = 'DECLARE @PageNumber AS INT, @RowspPage AS INT SET @PageNumber = '+str(positionPage)+' SET @RowspPage = '+str(nbPerPage)+' SELECT convert(varchar, ID ) ID,SCOPE,ORIGIN,FORMAT(JCRE, \'dd/MM/yyy HH:mm:ss\',\'en-US\') JCRE FROM TLOG_MESSAGES WHERE ORIGIN = '+origin+' '

		if 'search' in request.params.keys():
			search = request.params['search']
			queryTmp = queryTmp +'INTERSECT SELECT convert(varchar, ID ) ID,SCOPE,ORIGIN,FORMAT(JCRE, \'dd/MM/yyy HH:mm:ss\',\'en-US\') JCRE FROM TLOG_MESSAGES WHERE  JCRE LIKE(\'%'+search+'%\') OR ID LIKE(\'%'+search+'%\') OR SCOPE LIKE(\'%'+search+'%\')  OR ORIGIN LIKE(\'%'+search+'%\')'
			# ' ( JCRE LIKE(\'%'+search+'%\') OR ID LIKE(\'%'+search+'%\') OR SCOPE LIKE(\'%'+search+'%\') ) AND '

		queryTmp = queryTmp +' ORDER BY ID OFFSET ((@PageNumber - 1) * @RowspPage) ROWS FETCH NEXT @RowspPage ROWS ONLY'
		query = text(queryTmp)
	else:
		print("Aucun param on renvoi l'ensemble des ressources")
		nbPerPage = resultsTotal['NB_ERREUR']
		query = text('SELECT ID,SCOPE,ORIGIN,JCRE FROM TLOG_MESSAGES')


	params = request.params.mixed()
	logTable = Base.metadata.tables['TLOG_MESSAGES']

	 #.bindparams(bindparam('ori',origin))

	results = DBSession.execute(query).fetchall()
	#print(type(results))
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
	logTable = Base.metadata.tables['TLOG_MESSAGES']

	query = text('SELECT * FROM TLOG_MESSAGES where ID = :val').bindparams(bindparam('val',id_))
	# ID > :val'
	#	).bindparams(bindparam('val',5))
	# query = select([logTable.c['SCOPE'],logTable.c['ORIGIN']]
	# 	).group_by(logTable.c['SCOPE'],logTable.c['ORIGIN'])

	# query = select(logTable.c)

	# for key in params:
	# 	query = query.where(logTable.c[key] == params[key] )


	results = DBSession.execute(query).fetchall()
	print(type(results))

	data = [dict(row) for row in results]
	return data
